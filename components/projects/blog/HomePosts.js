'use client'

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = collection(db, "user_posts");
            const postsSnapshot = await getDocs(postsCollection);
            const postsList = postsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}));
            setPosts(postsList);
        };

        fetchPosts();
    }, []);


  
    return(
            <main className="min-h-screen h-auto flex flex-col items-center ">
                <section className="bg-white h-auto mt-5 mb-5 rounded-lg w-11/12 flex flex-col items-center pt-5 pb-5 ">
                    {/* Post 1 */}
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col p-2 border-t-4 border-gray-400 bg-white">
                            <div className="flex flex-row items-center gap-5 h-auto">
                                <Image className="rounded-full w-3/12" src="/projects/moms/profile.png" alt="User photo" width={100} height={100} />
                                <div className="w-9/12 flex flex-col items-start p-2">
                                    <h2 className="font-bold">{post.author}</h2>
                                    <p className="text-justify">{post.text}
                                    </p>
                                </div>
                            </div>
                            {post.urlPost && (
                                <div className="h-auto w-auto flex flex-col items-center">
                                    <Image src={post.urlPost} alt="Post image" height={200} width={200} />
                                </div>
                            )}
                            
                            <div className="flex flex-row gap-20 items-center justify-center font-bold mt-2">
                                <button>
                                    <Image src="/projects/social-blog/like.png" alt="Like" width={20} height={20} />
                                </button>
                                <button>
                                    <Image src="/projects/social-blog/share.png" alt="Share" width={20} height={20} />
                                </button>
                                <Link href={`/projects/blog_cms/${post.id}`}>
                                    <Image src="/projects/social-blog/comment.png" alt="Comment" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    ))}

                </section>  
            </main>
    )
}