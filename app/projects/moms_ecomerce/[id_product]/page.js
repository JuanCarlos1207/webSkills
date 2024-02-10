'use client';

import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import RootLayout from "@/app/layout";
import { app , db } from "@/firebaseConfig";
import Image from 'next/image';
import AddToCartButton from '@/components/projects/moms/addCart';


//export const metadata = {
//  title: 'Product page ',
//  description: 'The perfect product for you!',
//};

export default function Product({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore(app);
      const productRef = doc(db, 'moms_products_db', params.id_product);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        setProduct(productDoc.data());
      } else {
        console.log('No such document!'); // eslint-disable-line no-console
      }
    };

    fetchProduct();
  }, [params.id_product]);

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

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <RootLayout navbarData={navbarData} footerData={footerData}>
      <main className="min-h-screen h-auto flex flex-col items-center mb-8 p-5">
        <h1 className="font-bold text-5xl text-center pb-4 text-white">{product.Name}</h1>
        <div className='w-11/12 flex flex-col items-center sm:flex-row '>
          <div className='flex flex-col items-center p-2 sm:w-1/2'>
            <Image className='rounded-lg sm:w-[600px] sm:h-[400px]' src={product.Img} alt={product.Name} width={300} height={300} />
            <p className='font-bold text-2xl text-center'>{'$ '}{product.Price}</p>
          </div>
          <div className='flex flex-col items-center sm:w-1/2'>
            <p className='text-black text-justify'>{product.Description}</p>
            <AddToCartButton id={params.id_product} name={product.Name} price={product.Price} image={product.Img} description={product.Description} />
          </div>
        </div>
      </main>
    </RootLayout>
  );
};