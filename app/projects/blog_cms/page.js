import RootLayout from "@/app/layout";
import HomePosts from "@/components/projects/blog/HomePosts";
import Post from "@/components/projects/blog/profile/Post";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Social Blog',
    description: 'Look all the posts and share your feelings with the community.',
  };

export default function Blog() {

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

    return(
        <RootLayout navbarData={navbarData} footerData={footerData} >
            <main className="min-h-screen h-auto flex flex-col items-center ">
                <header className="flex flex-col items-center pt-3 ">
                    <h1 className="font-bold text-5xl text-center p-2">Social Blog</h1>
                    <Image src="/navbars/blog.png" alt="Blog logo" width={200} height={200} />
                </header>
                <Post />
                <section className="bg-white h-auto mt-5 mb-5 rounded-lg w-11/12 flex flex-col items-center pt-5 pb-5 ">
                    {/* Post 1 */}
                    <HomePosts/>

                </section>  
            </main>
        </RootLayout>
    )
}