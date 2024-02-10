import { storage, app, db } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, query,onSnapshot, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function Comments({prop}) {

    // logica para fetching de comentarios del post
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commentsCollection = collection(db, `user_posts/${prop}/comments`);
        const q = query(commentsCollection);

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let commentsArray = [];
            querySnapshot.forEach((doc) => {
                commentsArray.push(doc.data());
            });
            setComments(commentsArray);
        });
        return () => unsubscribe();
    }, [prop]);

    // logica para el agregar comentarios
    const [newComment, setNewComment] = useState('');
    const [urlPostComment, setUrlPostComment] = useState(null);

    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
      
        const NewCommentsCollection = collection(db, `user_posts/${prop}/comments`);
        await addDoc(NewCommentsCollection, { text: newComment, author: "Evelin Felix Campos", DocumentNameComment: prop });
      
        setNewComment('');
      };


    return (
        <main>

            <form onSubmit={handleCommentSubmit} className="">
                <div className="bg-[#197bbd] h-auto rounded-lg p-4 gap-5 flex flex-col mt-3">
                    <h2 className="text-white font-bold">New comment</h2>
                    <div className="flex flex-row gap-5">
                        <textarea
                            className="w-full p-2 rounded-lg resize-y"
                            style={{ minHeight: '50px', maxHeight: '200px' }}
                            placeholder="Post a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button type="submit" className="bg-[#fff275] p-2 rounded-lg w-auto">Post</button>
                    </div>
                </div>
            </form>



            {comments.map((comment, index) => (
                <div className="flex flex-col p-2 border-t-4 border-gray-400 bg-white items-center  rounded-lg">
                            <div className="flex flex-row items-center gap-5 h-auto">
                                <Image className="rounded-full w-3/12" src="/projects/moms/profile.png" alt="User photo" width={100} height={100} />
                                <div className="w-9/12 flex flex-col items-start p-2">
                                    <h2 className="font-bold">{comment.author}</h2>
                                    <p className="text-justify">{comment.text}</p>
                                </div>
                            </div>
                            {comment.urlPost && 
                                <div className="h-auto w-auto flex flex-col items-center">
                                    <Image src={`/${comment.urlPost}`} alt="Post image" height={200} width={200} />
                                </div>
                            }
                            
                            <div className="flex flex-row gap-20 items-center justify-center font-bold">
                                <button>
                                    <Image src="/projects/social-blog/like.png" alt="Like" width={20} height={20} />
                                </button>
                                <button>
                                    <Image src="/projects/social-blog/share.png" alt="Share" width={20} height={20} />
                                </button>
                                <Link href={`/projects/blog_cms/${comment.DocumentName}`}>
                                    <Image src="/projects/social-blog/comment.png" alt="Comment" width={20} height={20} />
                                </Link>
                            </div>
                    </div>
            ))}
        </main>
    );
}