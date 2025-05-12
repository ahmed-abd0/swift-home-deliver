
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import OrdersList from '@/components/OrdersList';

const Orders = () => {
  return (
    <div className="min-h-screen flex flex-col bg-delivery-light">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-delivery-dark">My Orders</h1>
          <p className="text-gray-600">Track and manage all your deliveries</p>
        </div>
        <OrdersList />
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
