
import React from 'react';
import DeliveryMap from './DeliveryMap';
import DeliveryStatus from './DeliveryStatus';

const TrackingSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-delivery-dark mb-4">Track Your Delivery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See exactly where your package is with our real-time GPS tracking system.
            Know when it will arrive at your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 h-[500px]">
            <DeliveryMap />
          </div>
          <div>
            <DeliveryStatus 
              status="on-the-way" 
              estimatedTime="15-25 min" 
              driverName="Michael S." 
              orderNumber="DLV-2451"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingSection;
