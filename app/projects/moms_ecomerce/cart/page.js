
import RootLayout from "@/app/layout";
import CartItems from "@/components/projects/moms/CartItems";
import CartTotal from "@/components/projects/moms/CartTotal";



export const metadata = {
    title: 'MoMs Cart',
    description: 'Your cart for moms ecomerce!',
  };

export default function Cart(){

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
                <h1 className="font-bold text-3xl mt-5">Cart</h1>
                <div className="w-11/12 flex flex-col items-center mt-5">
                    <button className="bg-[#f0c808] rounded-lg p-5 w-11/12 font-bold text-1xl">Pay for all the items</button>
                </div>

                <CartItems />
                <CartTotal items={CartItems} />
                
            </main>
        </RootLayout>
    )
}