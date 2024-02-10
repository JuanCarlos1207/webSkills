import Image from "next/image";
import RootLayout from "../layout";

export const metadata = {
    title: 'Skills',
    description: 'What I know and how I learn it',
  };


export default function Skills(){

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
      };

    return(
        <RootLayout navbarData={navbarData} footerData={footerData}>
            <main className="min-h-screen h-auto flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center sm:flex-row">
                    <div className="mb-10 flex flex-col items-center justify-center p-5 w-11/12 sm:w-1/3 bg-[#393d3f] m-5 rounded-lg">
                        <h1 className="font-bold text-3xl text-white">My Skills</h1>
                        <br />
                        <p className="text-justify text-white">In this section I will explain the skills that I have and how I learn each one of it, all this skills I put them on
                            practice in my projects, so if you want to see my projects you can go to the projects section.
                        </p>
                    </div>
                    <div className=" flex flex-col sm:w-2/3 sm:flex-row sm:flex-wrap sm:gap-4 items-center justify-center p-4">
                        <Image src="/skills/html-5.png" alt="HTML" width={200} height={200} />
                        <Image src="/skills/figma.png" alt="figma" width={400} height={200} />
                        <Image src="/skills/firebase.png" alt="Firebase" width={450} height={200} />
                        <Image src="/skills/js.png" alt="JS" width={200} height={200} />
                        <Image src="/skills/next.png" alt="Next" width={300} height={100} />
                        <Image src="/skills/py.png" alt="Python" width={200} height={200} />
                        <Image src="/skills/tailwind.png" alt="Tailwind css" width={400} height={200} />
                    </div>
                </div>
                <section className="flex flex-col items-center">
                    <div className="bg-white m-5 rounded-lg p-5 h-auto">
                        <h2 className="font-bold">List of skills:</h2>
                        <ol className="list-disc p-5">
                            <li className="mb-2">HTML and CSS</li>
                            <li className="mb-2"><span className="font-bold">Frameworks:</span> Next.js, React and Django</li>
                            <li className="mb-2"><span className="font-bold">Programming languages: </span> Javascript and Python</li>
                            <li className="mb-2">Firebase of Google</li>
                            <li className="mb-2">Excel and microsoft 365</li>
                            <li className="mb-2">Figma, Canva</li>
                            <li className="mb-2">Knowledge in UX design, sales and marketing</li>
                            <li className="mb-2">Knowledge and experience of 2 years in accounting</li>
                            <li className="mb-2">B2 level in english</li>
                        </ol>
                    </div>
                    <div className="bg-white w-11/12 rounded-lg flex items-center justify-center font-bold text-3xl">Experience</div>
                    
                    <div className="flex flex-row flex-wrap items-center justify-center">
                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">HTML and CSS</h2>
                            <p className="text-white text-justify m-2">I honed my skills in HTML and CSS through 
                            ourses on UDEMY, a prominent online learning platform. In these courses, I delved into 
                            the essential knowledge of all tags and attributes, as well as acquiring valuable practices 
                            or Search Engine Optimization "SEO".</p>
                            <Image src="/skills/html-5.png" alt="HTML" width={50} height={50} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">Frameworks</h2>
                            <p className="text-white text-justify m-2">I have learned three frameworks: React, Next.js,
                            and Django. I began with React through UDEMY courses, where I grasped key concepts like components,
                            hooks, and more.<br/><br/> Subsequently, I delved into Next.js to master server-side rendering for web applications,
                            enhancing optimization and SEO. Additionally, I learned Python as I was keen to understand backend 
                            functionalities."</p>
                            <Image src="/skills/react.png" alt="HTML" width={50} height={50} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">Programming languages</h2>
                            <p className="text-white text-justify m-2">I initially learned Python, where I mastered its syntax
                            and even created a desktop executable. Later, I shifted my focus to JavaScript, as it is the most
                            widely used technology for web development and even for mobile applications with React Native.</p>
                            <Image src="/skills/js.png" alt="HTML" width={50} height={50} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">Firebase from google</h2>
                            <p className="text-white text-justify m-2">I learned to use Google Firebase, as I am 
                            particularly fond of frontend development, which I believe shapes the user experience 
                            and can distinguish one software from another. I chose Firebase for its free plan and 
                            ease of use, as well as the fact that companies like Duolingo utilize it for their 
                            databases and functions.</p>
                            <Image src="/skills/firebase.png" alt="HTML" width={150} height={50} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">Microsoft 365</h2>
                            <p className="text-white text-justify m-2">Since primary and high school, where we were 
                            taught Microsoft tools like Excel, Word, PowerPoint, and others, I have honed my Excel 
                            skills during my two-year tenure at an accounting firm, where these tools were part of 
                            my daily routine.</p>
                            <Image src="/skills/365.png" alt="HTML" width={250} height={100} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">Design with Figma & Canva</h2>
                            <p className="text-white text-justify m-2">In high school, I frequently used Canva for
                            school projects, and after graduating, I began to use it extensively for its ease in 
                            design creation. Later, I learned Figma through a course on UDEMY, which greatly facilitated
                            my programming work. I could define the design in Figma and then proceed to program it.</p>
                            <Image src="/skills/figma.png" alt="HTML" width={150} height={150} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">Accounting</h2>
                            <p className="text-white text-justify m-2">I worked for two years at an accounting firm where 
                            I gained experience and learned the fundamentals of accounting, specifically in the area of auditing.</p>
                            <Image src="/skills/conta.png" alt="HTML" width={100} height={100} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">Knowledge in marketing</h2>
                            <p className="text-white text-justify m-2">I have read books and completed courses on marketing 
                            and sales, as these are subjects I am passionate about. While I lack hands-on experience, I 
                            am familiar with and understand many of the key terms in these fields.</p>
                            <Image src="/skills/marketing.png" alt="HTML" width={100} height={100} className="m-3" />
                        </div>

                        <div className="bg-[#393d3f] rounded-lg h-auto m-4 p-5 flex flex-col items-center max-w-lg min-w-300 drop-shadow-lg"> 
                            <h2 className="font-bold text-white text-2xl">B2 english level</h2>
                            <p className="text-white text-justify m-2">I have taken English classes all my life, 
                            from kindergarten through high school, and I plan to attend a university where English is 
                            the primary language. I have strong conversational English skills, and I once took a Duolingo 
                            certification exam where I achieved a B2 level.</p>
                            <Image src="/skills/b2.png" alt="HTML" width={100} height={100} className="m-3" />
                        </div>
                    </div>
                </section>
            </main>
        </RootLayout>
    );
};