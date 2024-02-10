'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Main_Header({data}){ 
    const [isOpen, setIsOpen] = useState(false);
    const app = data ? data.app : undefined;
    const color = data ? data.color : undefined;
    const links = data && data.links ? data.links : [];

    return(
        <nav className={`relative h-[120px] flex border-b-4 border-black items-center justify-center ${color} `}>
            <div className="flex items-center gap-3 m-4 w-1/2">
                {app && <Image src={`/navbars/${app}`} alt="Logo" width={50} height={50} />}
                <Link href={'/'} className="font-bold text-4xl hover:text-[#648de5]">Home</Link>
            </div>
            <div className="font-bold hidden gap-10 md:block w-1/2 space-x-4">
                {links.map((link, index) => (
                    <Link key={index} className="bg-[#f2f4ff] rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={link.href}>{link.name}</Link>
                ))}
            </div>
            <button className="md:hidden bg-[black] h-[50px] w-[70px] rounded-lg text-white" onClick={() => setIsOpen(!isOpen)}>Menu</button>
            <div className={`absolute z-10 flex flex-col items-center mt-[370px] h-auto p-5 bg-[#151e3f] w-11/12 rounded-lg ${isOpen ? '' : 'hidden'} md:flex-row`}>
                <ol className="flex flex-col gap-10 items-center font-bold justify-center w-full md:flex-row">
                    {links.map((link, index) => (
                        <Link key={index} className="bg-[#f2f4ff] w-11/12 rounded-lg p-2 hover:bg-[#648de5] hover:text-white" href={link.href}>{link.name}</Link>
                    ))}
                </ol>
            </div>
        </nav>
    )
}