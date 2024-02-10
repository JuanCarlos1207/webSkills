'use client';
import Image from "next/image";

export default function CartItem({ item, handleRemove, handleAdd }) {
    return (
        <div className="bg-white mt-5 w-11/12 rounded-lg h-auto items-center justify-center flex p-2">
            <div className="flex p-2 border-2 border-black w-11/12 h-11/12 rounded-lg">
                <div className="w-2/5 flex items-center">
                    <Image src={item.image} className="rounded-lg border-2 border-black drop-shadow-lg" alt="Product image" width={300} height={300} />
                </div>
                <div className="w-3/5 p-2 flex flex-col justify-center">
                    <h3 className="font-bold text-center">{item.name}</h3>
                    <p className="font-bold text-center">{'$ '}{item.price}</p>
                    <p className="text-center">{item.description}</p>
                    <div className="flex gap-4 mt-5">
                        <button onClick={() => { handleRemove(item.id); location.reload(); }} className="bg-[#3a795e] w-1/2 rounded-lg text-white p-2">Eliminar</button>
                        <button onClick={() => handleAdd(item.id)} className="bg-[#3a795e] w-1/2 rounded-lg text-white p-2">+</button>
                    </div>
                    <h3 className="text-center"><span className="font-bold">Items :</span> {item.quantity}</h3>
                </div>
            </div>
        </div>
    );
}