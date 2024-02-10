'use client';
import { app, db } from '@/firebaseConfig';
import { useState, useEffect, useRef } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Suspense } from 'react';
import AddToCartButton from './addCart';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsComponent() {
  const [productList, setProductList] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const fetchProducts = async () => {
      const db = getFirestore(app);
      const productsCollection = collection(db, 'moms_products_db');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      
      if (isMounted.current){
        setProductList(productsList);
      }
      
    };

    fetchProducts();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return(
    <div className="bg-black w-11/12 h-auto mt-7 flex flex-col  items-center justify-center rounded-lg p-4 gap-10 bg-transparent sm:flex-row sm:flex-wrap">
      {productList.map((product, index) => (
        <Suspense key={index} fallback={<h1>Loading...</h1>}>
          <div  className="bg-white w-auto h-auto flex flex-col items-center p-2 gap-2 rounded-lg border-2 border-black max-w-xl  " >
            <div className="h-3/4" style={{  overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={product.Img} className="rounded-lg border-4 border-black drop-shadow-lg  " alt="Happy mom!" width={350} height={480} />
            </div>
            
            <div className="bg-[#a997df] w-full h-auto rounded-lg p-3 flex flex-col">
              <h3 className="font-bold text-[#3a795e] text-2xl">{'$ '}{product.Price}<h3 className='text-white'>{' '}{product.Name}</h3></h3>
              <p className="text-white">{product.Description.substring(0, 100)}{product.Description.length > 100 ? "..." : ""}</p>
              <div className="flex gap-4">
                <AddToCartButton className="w-1/2" id={index} name={product.Name+product.id} price={product.Price} image={product.Img} description={product.Description} />
                <Link className="w-1/2 bg-[#3a795e] text-white flex items-center justify-center rounded-lg mt-2 p-2" href={`/projects/moms_ecomerce/${product.Id}`}>
                  <button>Check item</button>
                </Link>
                
              </div>
              
            </div>
          </div>
        </Suspense>
      ))}
    </div>
  )
}