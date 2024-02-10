'use client';

import { app, db, storage } from "@/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Post() {

    const [text, setText] = useState('');
    const [display, setDisplay] = useState('default');
    const [urlPost, setUrlPost] = useState('');

    // logica para subir imagen y eliminar imagen
    const handleImageUpload = (e) => {

        const file = e.target.files[0];
        const storageRef = ref(storage, `social_blog/user_posts/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapchot) => {
                // progreso de la subida
            },
            (error) => {
                alert("Error uploading file");
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrlPost(downloadURL);
                });
            }
        )
    };
    
    const handleImageRemove = () => {
        // restablece el input
        document.getElementById('fileUpload').value = null;
        // elimina la imagen seleccionada
        setUrlPost('');
    };


    // logica para subir informacion de ( Texto y Display) y crear seccion de coments
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "user_posts"), {
                text,
                display,
                urlPost,
                author: "Evelin Felix"
            });

            console.log("Document written with ID: ", docRef.id);

            // Agregar el nombre del documento
            await setDoc(docRef, { DocumentName: docRef.id }, { merge: true });
            
            // crear seccion de comentarios
            await addDoc(collection(db, `user_posts/${docRef.id}/comments`), {});

            setText('');
            setDisplay('');
            setUrlPost('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="w-11/12">
            <div className="bg-[#197bbd] h-auto rounded-lg p-4 gap-5 flex flex-col mt-3">
                <h2 className="text-white font-bold">New post</h2>
                <div className="flex flex-row gap-5">
                    <textarea
                        className="w-full p-2 rounded-lg resize-y"
                        style={{ minHeight: '50px', maxHeight: '200px' }}
                        placeholder="In what are you thinking?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type="submit" className="bg-[#fff275] p-2 rounded-lg w-auto">Post</button>
                </div>
                <div className="flex flex-col">
                    <div className="relative flex flex-col items-center">
                        {urlPost && 
                            <div className="absolute right-0 top-0 z-8 p-2">
                                <Image src={'/projects/social-blog/x.png'} alt="Cancel" height={20} width={20} onClick={handleImageRemove}/>
                            </div>
                        }
                        {urlPost && <Image src={urlPost} alt="Preview image" height={200} width={200}/>}
                    </div>
                    <div className="flex flex-row gap-8 mt-2">
                        <label htmlFor="fileUpload">
                            <Image className="filter invert" src="/projects/social-blog/img.png" alt="Like" width={30} height={30} />
                        </label>
                        <input type="file" accept="image/*" id="fileUpload" className="hidden" onChange={handleImageUpload} style={{display: 'none'}} />
                        
                        <select className="rounded-lg p-1" name="opcionesDisplay" id="opciones"
                        onChange={(e) => setDisplay(e.target.value)}
                        >
                            <option value="default">default</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="Close friends">Close friends</option>
                        </select>
                    </div>
                        
                </div>
            </div>
        </form>
    )


}