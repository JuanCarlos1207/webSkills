import Image from "next/image";
import Link from "next/link";
import ButtonCopy from "../landing/copy";

export default function Main_Footer({data}){

    const app = data ? data.app : undefined;
    const color = data ? data.color : undefined;

    return(
        <footer className={`h-auto flex p-4 flex-col ${color} `}>
            <div className="flex flex-row justify-center items-center gap-6 w-full h-auto">
                {app && <Image src={`/navbars/${app}`} alt="Logo" width={100} height={100} />}
                <Link href={'/'} className="font-bold text-4xl hover:text-[#648de5]">Home</Link>
            </div>
            <div className="flex m-4 w-full flex-col h-auto">
                <div className="flex flex-row items-center justify-center">
                    <h3><span className="font-bold">Email:</span> juancaa1207@gmail.com</h3>
                    <ButtonCopy textToCopy="juancaa1207@gmail.com" />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <h3><span className="font-bold">Phone:</span> +52 177 372 8071</h3>
                    <ButtonCopy textToCopy="juancaa1207@gmail.com" />
                </div>
            </div>
        </footer>
    )
}