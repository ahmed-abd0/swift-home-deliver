
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-delivery-light py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-delivery-dark">
              Fast & Reliable <span className="text-delivery-primary">Delivery</span> Service
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Track your packages in real-time with our GPS technology. Know exactly when your delivery will arrive.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Button size="lg" className="bg-delivery-primary hover:bg-delivery-primary/90 text-white font-medium px-6">
                Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-delivery-primary text-delivery-primary hover:bg-delivery-secondary">
                Track Order
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-delivery-secondary to-transparent rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1591168508000-06bd46d74b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Delivery" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Green accent shapes */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-delivery-secondary opacity-50 -z-10"></div>
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-delivery-primary opacity-10 -z-10"></div>
      <div className="absolute top-40 left-1/2 w-32 h-32 rounded-full bg-delivery-secondary opacity-30 -z-10"></div>
    </div>
  );
};

export default Hero;
