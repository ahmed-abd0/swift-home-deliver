
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

// Sample product data
const productData = {
  1: {
    id: 1,
    name: 'Grilled Chicken Salad',
    description: 'Fresh mixed greens topped with grilled chicken, cherry tomatoes, cucumber, red onion, and balsamic vinaigrette.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop&auto=format',
    category: 'Salads',
    rating: 4.5,
    reviews: 28
  },
  2: {
    id: 2,
    name: 'Vegetable Stir Fry',
    description: 'Seasonal vegetables stir-fried in a savory sauce, served over steamed rice.',
    price: 10.50,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&auto=format',
    category: 'Main Course',
    rating: 4.2,
    reviews: 15
  },
  3: {
    id: 3,
    name: 'Fresh Fruit Smoothie',
    description: 'A refreshing blend of seasonal fruits, yogurt, and honey.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&h=500&fit=crop&auto=format',
    category: 'Beverages',
    rating: 4.8,
    reviews: 32
  }
};

const Product = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  // Check if product exists
  const productId = id ? parseInt(id) : 0;
  const product = productData[productId as keyof typeof productData];
  
  // If product not found, redirect to 404
  if (!product) {
    // We could redirect here, but we'll render a simple message and link instead
    return (
      <div className="min-h-screen flex flex-col bg-delivery-light">
        <NavBar />
        <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-delivery-dark mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Return to Home</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-delivery-light">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="mb-4">
              <span className="text-sm text-delivery-primary font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-delivery-dark mt-1">{product.name}</h1>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 text-sm">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-2xl font-bold text-delivery-primary">${product.price.toFixed(2)}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="flex items-center mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mr-4">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  type="button" 
                  className="p-2 border border-gray-300 rounded-l-md bg-gray-100" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="text" 
                  id="quantity" 
                  className="border-t border-b border-gray-300 p-2 w-12 text-center" 
                  value={quantity} 
                  readOnly 
                />
                <button 
                  type="button" 
                  className="p-2 border border-gray-300 rounded-r-md bg-gray-100" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <Button 
              className="w-full bg-delivery-primary hover:bg-delivery-primary/90 gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
