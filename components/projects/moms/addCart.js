'use client';

import { useCallback } from 'react';

export default function AddToCartButton({ id, name, price, image, description }) {
    const addToCart = useCallback(() => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

        console.log('initial cart:', cart); // eslint-disable-line no-console

        const itemIndex = cart.findIndex(item => item.id === id);

        if (itemIndex > -1) {
            cart[itemIndex].quantity += 1;
        } else {
            const newItem = {
                id,
                name,
                price,
                image,
                description,
                quantity: 1 // Cambia esto a 1
            };
            cart.push(newItem);
        }

        console.log('Updated cart:', cart); // eslint-disable-line no-console

        localStorage.setItem('cart', JSON.stringify(cart));
        
    }, [id, name, price, image, description]);

    return (
        <button className="bg-[#3a795e] text-white w-1/2 rounded-lg mt-2 p-2" onClick={addToCart}>
            Add to cart
        </button>
    );
}