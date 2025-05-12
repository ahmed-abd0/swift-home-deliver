
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CartItems from '@/components/CartItems';
import OrderSummary from '@/components/OrderSummary';

const Cart = () => {
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
            <CartItems />
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
