
import React, { useMemo } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';
import { CartItem } from '@/pages/Cart';

interface OrderSummaryProps {
  cartItems: CartItem[];
}

const OrderSummary = ({ cartItems }: OrderSummaryProps) => {
  // Calculate order summary dynamically based on cart items
  const summary = useMemo(() => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 3.99 : 0;
    const tax = subtotal * 0.07; // 7% tax rate
    const total = subtotal + deliveryFee + tax;
    
    return {
      subtotal,
      deliveryFee,
      tax,
      total
    };
  }, [cartItems]);

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="font-semibold text-lg text-delivery-dark mb-4">Order Summary</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${summary.subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium">${summary.deliveryFee.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">${summary.tax.toFixed(2)}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between font-medium text-lg">
              <span className="text-delivery-dark">Total</span>
              <span className="text-delivery-primary">${summary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-delivery-primary hover:bg-delivery-primary/90 gap-2"
          disabled={cartItems.length === 0}
        >
          <CreditCard className="h-4 w-4" />
          <span>Proceed to Checkout</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
