
import RootLayout from "@/app/layout";
import ProductsComponent from "@/components/projects/moms/useProducts";

import Image from "next/image";

export const metadata = {
    title: 'MoMs Ecomerce',
    description: 'The perfect web for moms!',
  };


export default function Moms() {


    const navbarData = {
        app: "ecomerce.png",
        color: 'bg-[#a997df]',
        links: [
          {name: "Cart", href: "/projects/moms_ecomerce/cart"},
          {name: "My profile", href: "/projects/moms_ecomerce/my_profile"},
          {name: "Return home", href: "/projects/moms_ecomerce"},
        ]
      };

      const footerData = {
        app: "ecomerce.png",
        color: 'bg-[#a997df]',
      };


    return(


        <RootLayout navbarData={navbarData} footerData={footerData} > 
            <main className="min-h-screen h-auto flex flex-col items-center mb-5">
                <header className="flex flex-col items-center mt-7 p-5">
                  <h1 className="font-bold text-7xl text-center text-white">MoMs Ecomerce</h1>
                  <label className="bg-[#FFCE6C] rounded-lg p-3 mt-4 ">In case you want to return click on "HOME" on a side of the logo.</label>
                </header>
                <section className="w-full flex flex-col justify-center items-center">
                  <div className="flex justify-center flex-col items-center gap-6">
                    <h2 className="bg-[#a997df] p-5 rounded-lg font-bold w-11/12 text-center">Check all the products for moms!</h2>
                    <div className="gap-2 flex flex-col items-center">
                      <Image src="/projects/moms/mama1.png" className="rounded-lg border-2 border-black drop-shadow-lg" alt="Happy mom!" width={300} height={300} />
                      <h3 className="font-bold">Be the best mom that you could be!</h3>
                      <Image src="/projects/moms/mom2.jpg" className="rounded-lg border-2 border-black drop-shadow-lg" alt="Happy mom!" width={300} height={300} />
                    </div>
                  </div>
                  
                  <ProductsComponent />



                </section>
                
            </main>
        </RootLayout>
            
    );
};