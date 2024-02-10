'use client';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';


export default function CartItems() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cart');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const handleRemove = (id) => {
        const newCartItems = cartItems.map(item => {
            if (item.id === id) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        }).filter(item => item.quantity > 0);

        setCartItems(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    const handleAdd = (id) => {
        const newCartItems = cartItems.map(item => {
            if (item.id === id) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });

        setCartItems(newCartItems);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
    };

    return (
        <>
            {cartItems.map((item, index) => (
                <CartItem key={index} item={item} handleRemove={handleRemove} handleAdd={handleAdd} />
            ))}
        </>
    );
}