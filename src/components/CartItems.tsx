
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash } from 'lucide-react';
import { CartItem } from '@/pages/Cart';

interface CartItemsProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, increment: boolean) => void;
  removeItem: (id: number) => void;
}

const CartItems = ({ cartItems, updateQuantity, removeItem }: CartItemsProps) => {
  if (cartItems.length === 0) {
    return (
      <Card className="mb-8">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="p-4 rounded-full bg-delivery-secondary mb-4">
            <Trash className="h-8 w-8 text-delivery-primary" />
          </div>
          <h3 className="text-xl font-medium text-delivery-dark mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Add items to get started with your order</p>
          <Button className="bg-delivery-primary hover:bg-delivery-primary/90">
            Browse Menu
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
          <h2 className="font-semibold text-lg text-delivery-dark">Cart Items</h2>
          <span className="text-sm text-gray-500">{cartItems.length} items</span>
        </div>
        
        <ul className="divide-y divide-gray-100">
          {cartItems.map(item => (
            <li key={item.id} className="py-6 flex flex-col sm:flex-row gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-medium text-delivery-dark">{item.name}</h3>
                <p className="text-delivery-primary font-medium mt-1">${item.price.toFixed(2)}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full border-gray-200"
                      onClick={() => updateQuantity(item.id, false)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full border-gray-200"
                      onClick={() => updateQuantity(item.id, true)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CartItems;
