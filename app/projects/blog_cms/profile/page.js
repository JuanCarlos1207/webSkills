import RootLayout from "@/app/layout";
import Profile from "@/components/projects/blog/profile/Profile";

export const metadata = {
    title: 'Your social profile',
    description: 'Check your profile and see your posts and comments.',
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
                <Profile />
            </main>
        </RootLayout>
    )
}