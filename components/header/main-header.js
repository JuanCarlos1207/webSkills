'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Main_Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="relative bg-[#f2f4ff] h-[120px] flex border-b-4 border-black items-center justify-center">
            <div className="flex items-center gap-3 m-4 w-1/2">
                <Image src="/landing/red-mundial.png" alt="Logo" width={50} height={50} />
                <Link href={'/'} className="font-bold text-4xl hover:text-[#648de5]">Home</Link>
            </div>
            <div className="font-bold hidden gap-10 md:block w-1/2">
                <Link className="bg-[#f2f4ff] rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={'/projects'}>List of projects</Link>
                <Link className="bg-[#f2f4ff] rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={'/about_me'}>About me</Link>
                <Link className="bg-[#f2f4ff] rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={'/skills'}>Skills</Link>
            </div>
            <button className="md:hidden bg-[black] h-[50px] w-[70px] rounded-lg text-white" onClick={() => setIsOpen(!isOpen)}>Menu</button>
            <div className={`absolute z-10 flex flex-col items-center mt-[370px] h-auto p-5 bg-[#151e3f] w-11/12 rounded-lg ${isOpen ? '' : 'hidden'} md:flex-row`}>
                <ol className="flex flex-col gap-10 items-center font-bold justify-center w-full md:flex-row">
                    <Link onClick={() => setIsOpen(false)} className="bg-[#f2f4ff] w-11/12 rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={'/projects'}>List of projects</Link>
                    <Link onClick={() => setIsOpen(false)} className="bg-[#f2f4ff] w-11/12 rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={'/about_me'}>About me</Link>
                    <Link onClick={() => setIsOpen(false)} className="bg-[#f2f4ff] w-11/12 rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={'/skills'}>Skills</Link>
                </ol>
            </div>
        </nav>
    )
}