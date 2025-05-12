
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import TrackingSection from '@/components/TrackingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-delivery-light">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <TrackingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
