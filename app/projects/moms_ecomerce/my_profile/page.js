
import RootLayout from "@/app/layout";
import UpdateProf from "@/components/projects/moms/UpdateProf";
import Image from "next/image";

export const metadata = {
    title: 'MoMs Profile',
    description: 'Check your profile and your orders!',
  };


export default function My_profile(){

    const navbarData = {
        app: "ecomerce.png",
        color: 'bg-[#a997df]',
        links: [
          {name: "Cart", href: "/projects/moms_ecomerce"},
          {name: "My profile", href: "/projects/moms_ecomerce/my_profile"},
          {name: "Return home", href: "/projects/moms_ecomerce"},
        ]
      };

      const footerData = {
        app: "ecomerce.png",
        color: 'bg-[#a997df]',
      };

    return(
        

        <RootLayout navbarData={navbarData} footerData={footerData}>
            <main className="min-h-screen h-auto flex flex-col items-center mb-8">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="pt-5 font-bold text-4xl">My profile</h1>
                    <Image src="/projects/moms/profile.png" className="rounded-full border-2 border-white drop-shadow-lg" alt="Happy mom!" width={300} height={300} />    
                </div>
                <div>
                    <UpdateProf />
                </div>
                
            </main>
        </RootLayout>

    )

};