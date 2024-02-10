'use client';

import RootLayout from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useEffect, useState } from "react";
import Comments from "@/components/projects/blog/users/comments";


//export const metadata = {
//    title: 'Comment Post',
//    description: 'comment the post and share your feelings with the community.',
//  };

export default function CommentsPage({ params }) {

    const navbarData = {
        app: "blog.png",
        color: 'bg-[#fff275]',
        links: [
          {name: "Return to home", href: "/projects/blog_cms"},
          {name: "My profile", href: "/projects/blog_cms/profile"},
        ]
      };

      const footerData = {
        app: "blog.png",
        color: 'bg-[#fff275]',
      }

    // fetchin data from firestore
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = doc(db, "user_posts", params.comments);
            const postSnapshot = await getDoc(postDoc);
            if (postSnapshot.exists()) {
                setPost(postSnapshot.data());
            } else {
                console.log("No such document!");
            }
            setLoading(false);
        }
        fetchPost();
    }, [params.comments]);

    if (loading) return (<h1 className="text-3xl flex flex-col items-center justify-center">Loading...</h1>)

    return(
        <RootLayout navbarData={navbarData} footerData={footerData}  >
            <main className="min-h-screen h-auto flex flex-col items-center">
                <section className="bg-white h-auto mt-5 rounded-lg flex flex-col items-center pt-5 justify-center">
                    {/* Post */}
                    {post &&  (
                        <div key={post.id} className="flex flex-col p-2 border-t-4 border-gray-400 bg-white items-center">
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
                    )}
                </section>
                
                
                {/* Comment section  */}
                <Comments prop={params.comments} />

            </main>
        </RootLayout>
    )
}