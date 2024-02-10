import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";

export const metadata = {
    title: 'Projects page',
    description: 'All my projects that I have done to show my skills in coding',
  };

export default function Projects() {

    const navbarData = {
        app: "red-mundial.png",
        color: 'bg-[#f2f4ff]',
        links: [
          {name: "List of projects", href: "/projects"},
          {name: "About me", href: "/about_me"},
          {name: "Skills", href: "/skills"},
        ]
      };

      const footerData = {
        app: "red-mundial.png",
        color: 'bg-[#f2f4ff]',
      }
      
    return(
        <RootLayout navbarData={navbarData} footerData={footerData} bgcolor="#96c5f7">
            <main className="min-h-screen h-auto flex flex-col items-center ">
                <h1 className="font-bold mt-3 text-4xl mb-6">My Projects</h1>
                <Image className="rounded-full" src="/landing/photo.jpg" alt="Landing page" width={200} height={200} />

                <div className="font-bold mt-5 p-5 text-justify">
                    <p>Which one do you want to try?, it's gonna be quick, the web app is created to guide you,
                        max 3 minutes, I hope you enjoy it.
                        <br /><br />
                        The projects are ordered from the oldest to the newest, so you can see my progress in the time and 
                        the way that I have improved my skills.
                    </p>
                </div>
                
                <div className="flex flex-col items-center mt-7 gap-8 mb-8">
                    <Link href={'/projects/moms_ecomerce'} className="bg-[#393d3f] gap-2 rounded-lg border-white border-4 w-11/12 flex flex-col p-4 h-auto items-center justify-center">
                        <h2 className="text-white font-bold text-2xl">Ecomerce MoM's web</h2>
                        <p className="text-white text-center">Do you want to use a Ecomerce web that is exclusively for Moms?.</p>
                        <Image src="/projects/ecomerce.png" alt="Ecomerce web" width={200} height={200} />
                    </Link>

                    <Link href={'/projects/blog_cms'} className="bg-[#393d3f] gap-2 rounded-lg border-white border-4 w-11/12 flex flex-col p-4 h-auto items-center justify-center">
                        <h2 className="text-white font-bold text-2xl">Blog with CMS</h2>
                        <p className="text-white text-center">Or do you want to post your feelings on a community?.</p>
                        <Image src="/projects/blog.png" alt="Ecomerce web" width={200} height={200} />
                    </Link>

                    <Link href={'/projects/to-do-list'} className="bg-[#393d3f] gap-2 rounded-lg border-white border-4 w-11/12 flex flex-col p-4 h-auto items-center justify-center">
                        <h2 className="text-white font-bold text-2xl">To-do list with reservations </h2>
                        <p className="text-white text-center">Maybe you have a lot of things to do like reserve an hotek and you need to
                        organice yourself.</p>
                        <Image src="/projects/list.png" alt="Ecomerce web" width={200} height={200} />
                    </Link>

                    <Link href={'/projects/AIassistant'} className="bg-[#393d3f] gap-2 rounded-lg border-white border-4 w-11/12 flex flex-col p-4 h-auto items-center justify-center">
                        <h2 className="text-white font-bold text-2xl">AI Work assistant</h2>
                        <p className="text-white text-center">Or try the incredibly things that AI can do.</p>
                        <Image src="/projects/AI.png" alt="Ecomerce web" width={200} height={200} />
                    </Link>

                </div>

                <div className="w-11/12 bg-[#393d3f] rounded-lg p-5 text-white mb-3 flex items-center justify-center text-center">
                    <p className="text-2xl font-bold p-5 text-justify">As you can see I love programming and I hope one day I can help humanity 
                    with some incredible tool.
                    <br /><br />
                    I hope you enjoyed it and if you want to contact me you can copy my contact info on the footer of the Web Page.
                    </p>
                </div>
                
                
            </main>
        </RootLayout>
    );


};