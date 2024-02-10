// CartTotal.js
'use client';
import { useEffect, useState } from 'react';

export default function CartTotal() {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cart');
        if (storedCartItems) {
            const cartItems = JSON.parse(storedCartItems);
            const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotal(total);
        }
    }, []);

    return (
        <div className="mt-5 bg-amber-200 rounded-lg p-5">
            <h2 className="font-bold text-2xl">Total: {'$ '}{total}</h2>
        </div>
    );
}