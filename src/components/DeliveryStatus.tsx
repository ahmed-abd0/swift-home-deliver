
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Package, MapPin, Truck } from 'lucide-react';

type DeliveryStatusProps = {
  status: 'preparing' | 'on-the-way' | 'delivered';
  estimatedTime: string;
  driverName: string;
  orderNumber: string;
};

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({
  status,
  estimatedTime,
  driverName,
  orderNumber,
}) => {
  // Calculate progress percentage based on status
  const getProgress = () => {
    switch (status) {
      case 'preparing': return 25;
      case 'on-the-way': return 65;
      case 'delivered': return 100;
      default: return 0;
    }
  };

  // Get status display text
  const getStatusText = () => {
    switch (status) {
      case 'preparing': return 'Preparing your order';
      case 'on-the-way': return 'On the way';
      case 'delivered': return 'Delivered';
      default: return '';
    }
  };

  return (
    <Card className="p-6 shadow-md bg-white border-delivery-secondary">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-delivery-dark">Order #{orderNumber}</h3>
        <span className="px-3 py-1 bg-delivery-secondary text-delivery-primary rounded-full text-sm font-medium">
          {getStatusText()}
        </span>
      </div>

      <Progress value={getProgress()} className="h-2 mb-6" />
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
            status === 'preparing' || status === 'on-the-way' || status === 'delivered' 
              ? 'bg-delivery-primary text-white' 
              : 'bg-gray-100 text-gray-400'
          }`}>
            <Package className="h-5 w-5" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-delivery-dark">Preparing</p>
            <p className="text-sm text-gray-500">Your order is being prepared</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
            status === 'on-the-way' || status === 'delivered' 
              ? 'bg-delivery-primary text-white' 
              : 'bg-gray-100 text-gray-400'
          }`}>
            <Truck className="h-5 w-5" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-delivery-dark">On the way</p>
            <p className="text-sm text-gray-500">
              {status === 'on-the-way' 
                ? `${driverName} is delivering your order` 
                : 'Driver will pick up your order'}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
            status === 'delivered' 
              ? 'bg-delivery-primary text-white' 
              : 'bg-gray-100 text-gray-400'
          }`}>
            <MapPin className="h-5 w-5" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-delivery-dark">Delivered</p>
            <p className="text-sm text-gray-500">Estimated arrival: {estimatedTime}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="font-medium text-delivery-dark">{driverName.charAt(0)}</span>
          </div>
          <div className="ml-4">
            <p className="font-medium text-delivery-dark">{driverName}</p>
            <p className="text-sm text-gray-500">Your delivery driver</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DeliveryStatus;
