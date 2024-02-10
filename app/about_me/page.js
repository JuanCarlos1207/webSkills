import Image from "next/image";
import RootLayout from "../layout";

export const metadata = {
    title: 'About me',
    description: 'Page that tells a little about me like what I am doing, my goals and etc',
  };


export default function AboutMe() {

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
        <RootLayout navbarData={navbarData} footerData={footerData}>
            <main className="min-h-screen flex items-center justify-center flex-col sm:flex-row ">
                <div className="w-11/12 flex flex-col items-center justify-center mt-5 sm:w-1/2 sm:p-10 text-justify">
                    <h1 className="font-bold text-2xl sm:text-5xl">About me</h1>
                    <br /><br />
                    <p>I am 20 years old and reside in León Guanajuato, Mexico. My journey in programming began at the age of 18. 
                        Through online resources and books, I have honed my skills in programming, with a particular focus on web 
                        development. My passion lies in the creation of Software as a Service (SaaS) solutions, as I believe they 
                        offer significant value to the world.
                    <br/><br/>
                    Previously, I was pursuing a degree in accounting, a path influenced by my family's guidance. However, I soon 
                    realized my profound interest in programming and made the bold decision to switch my career path to follow my 
                    passion. During my two years working in an accounting firm, I gained valuable office experience, deepened my 
                    understanding of accounting practices, and refined my professional skills.
                    <br /><br />
                    I am a person who takes calculated risks and is willing to make sacrifices to achieve my goals. Dedicated and studious,
                    I possess a high level of conversational English. Currently, I am seeking an entry-level position in a software company, 
                    where I can contribute my skills and continue to grow professionally.
                    </p>
                </div>
                <div className="mt-8 mb-8 sm:w-1/2 flex items-center justify-center">
                    <Image src="/landing/photo.jpg" className="rounded-full sm:w-[350px] sm:h-[350px]" alt="Juan Carlos Rivera Alvarado" width={200} height={200} />
                </div>

            </main>
        </RootLayout>
    )
}