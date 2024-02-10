'use client';

import { app } from "@/firebaseConfig";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import { useEffect, useState } from "react";
import Image from "next/image";
import Post from "./Post";
import HomePosts from "../HomePosts";




export default function Profile()  {

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            const storage = getStorage(app);
            const storageRef = ref(storage, 'social_blog/profile/wallpaper.jpg');

            const url = await getDownloadURL(storageRef);
            setImageUrl(url);
        };
        fetchImage();
    }, []);

    if (!imageUrl){
        return <h1 className="flex flex-col items-center justify-center text-5xl font-bold mt-5">Loading...</h1>
    }

    return(
        <header className="w-full" >
            <div>
                <Image className="w-full" src={imageUrl} alt="Blog logo" width={200} height={200} />
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <Image className="rounded-full " src="/projects/moms/profile.png" alt="User photo" width={200} height={200} />
                </div>
                <div className="flex flex-row gap-5">
                    <h1 className="font-bold text-2xl">Evelin Felix</h1>
                    <button>
                        <Image src="/projects/social-blog/edit.png" alt="Blog logo" width={30} height={30} />
                    </button>
                </div>
                <div className="flex flex-col items-start ">
                    <h3><span className="font-bold">Age:</span> 20</h3>
                    <h3><span className="font-bold">Country:</span> Mexico</h3>
                    <h3><span className="font-bold">City:</span> Cancun</h3>
                    <h3><span className="font-bold">Joined on:</span> 08/02/2024</h3>
                </div>
                <Post />
                
                <section className="bg-white h-auto mt-5 mb-5 rounded-lg w-11/12 flex flex-col items-center pt-5 pb-5 ">
                    <HomePosts />

                </section>  
            </div>
           
        </header>
    )

}