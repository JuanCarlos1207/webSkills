import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen h-auto flex flex-col items-center justify-center">
      <header className="flex items-center justify-center">
        <div className="bg-[#393d3f] h-52 w-11/12 mt-4 rounded-lg flex flex-col items-center p-3 justify-center drop-shadow-lg ">
          <h1 className="font-bold text-white text-3xl">Juan Carlos Rivera Portfolio roadmap</h1>
          <br />
          <p className=" text-white text-justify" >This web page contains information about my experience in coding, projects that I've done and 
            a little more.
            
          </p>
        </div>
      </header>

      <section className="mt-10 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center bg-white w-11/12  rounded-lg">
          <Image src="/landing/photo.jpg" className="rounded-full" alt="Juan Carlos Rivera Alvarado" width={200} height={200} />
        </div>
        <h2 className="pt-10 p-3 text-justify font-bold">My name is Juan Carlos and you can check my projects, know about me, my skills and etc</h2>
        <p className="w-11/12 sm:w-1/2 text-justify">
          <br />
            In the section of <span className="font-bold">projects</span> I programmed all the projects that I created to show my skills in coding,
            it's like a dynamic web app where depending on the project that you click, it will show you the project so the 
            whole UI will change.
        </p>
      </section>

      <div className="w-11/12 flex flex-col items-center justify-center mt-6 mb-6 sm:flex-wrap sm:flex-row">
        <Link href={'/projects'} className="bg-[#393d3f] border-2  border-black w-[300px] h-[250px] flex flex-col items-center rounded-lg m-3 drop-shadow-lg">
          <h2 className="h-1/4 font-bold text-2xl text-white">Projects</h2>
          <Image className="h-3/4" src="/landing/projects.png"  alt="Juan Carlos Rivera Alvarado" width={150} height={20} />
        </Link>
        <Link href={'/about_me'} className="bg-[#393d3f] border-2  border-black w-[300px] h-[250px] flex flex-col items-center rounded-lg m-3 drop-shadow-lg">
          <h2 className="h-1/4 font-bold text-2xl text-white">About me</h2>
          <Image className="h-3/4" src="/landing/me.png" alt="Juan Carlos Rivera Alvarado" width={200} height={200} />
        </Link>
        <Link href={'/skills'} className="bg-[#393d3f] border-2  border-black w-[300px] h-[250px] flex flex-col items-center rounded-lg m-3 drop-shadow-lg">
          <h2 className="h-1/4 font-bold text-2xl text-white">My skills</h2>
          <Image className="h-3/4" src="/landing/js.png" alt="Juan Carlos Rivera Alvarado" width={200} height={100} />
        </Link>
      </div>

        

      
    </main>
  );
};
