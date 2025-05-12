
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample data for orders
const orders = [
  {
    id: 'ORD-5432',
    date: '2025-05-10',
    status: 'delivered',
    items: 3,
    total: 42.50,
  },
  {
    id: 'ORD-4321',
    date: '2025-05-07',
    status: 'delivered',
    items: 2,
    total: 28.75,
  },
  {
    id: 'ORD-3210',
    date: '2025-05-05',
    status: 'delivered',
    items: 4,
    total: 56.20,
  },
  {
    id: 'ORD-2109',
    date: '2025-05-01',
    status: 'delivered',
    items: 1,
    total: 15.99,
  }
];

const OrderStatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-delivery-primary';
      case 'in-transit':
        return 'bg-blue-100 text-blue-700';
      case 'processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const OrdersList = () => {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <Card key={order.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-delivery-secondary rounded-full">
                  <Package className="h-6 w-6 text-delivery-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-delivery-dark">{order.id}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>
                      {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-start md:items-end gap-1">
                <OrderStatusBadge status={order.status} />
                <p className="text-sm text-gray-600">{order.items} {order.items > 1 ? 'items' : 'item'}</p>
                <p className="font-medium text-delivery-dark">${order.total.toFixed(2)}</p>
              </div>
              
              <Button
                variant="ghost" 
                asChild
                className="md:self-center text-delivery-primary hover:text-delivery-primary hover:bg-delivery-secondary">
                <Link to={`/orders/${order.id}`}>
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrdersList;
