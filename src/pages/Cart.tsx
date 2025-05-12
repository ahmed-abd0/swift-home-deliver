
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CartItems from '@/components/CartItems';
import OrderSummary from '@/components/OrderSummary';

// Define the cart item type
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Sample cart data
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Grilled Chicken Salad',
    price: 12.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Vegetable Stir Fry',
    price: 10.50,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&auto=format',
  },
  {
    id: 3,
    name: 'Fresh Fruit Smoothie',
    price: 5.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&h=500&fit=crop&auto=format',
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, increment: boolean) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)
        };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-delivery-light">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-delivery-dark">Your Cart</h1>
          <p className="text-gray-600">Review your items before checkout</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems 
              cartItems={cartItems} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem} 
            />
          </div>
          <div>
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
