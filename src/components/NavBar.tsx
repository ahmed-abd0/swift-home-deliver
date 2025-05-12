
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { User, Package, Home, ShoppingCart, Heart, Settings } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-delivery-primary' : 'text-delivery-dark';
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-delivery-secondary shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-delivery-primary" />
          <span className="font-bold text-xl text-delivery-dark">DeliverEase</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium flex items-center gap-1 ${isActive('/')} hover:text-delivery-primary transition-colors`}>
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/orders" className={`text-sm font-medium flex items-center gap-1 ${isActive('/orders')} hover:text-delivery-primary transition-colors`}>
            <Package className="w-4 h-4" />
            <span>My Orders</span>
          </Link>
          <Link to="/cart" className={`text-sm font-medium flex items-center gap-1 ${isActive('/cart')} hover:text-delivery-primary transition-colors`}>
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
          </Link>
          <Link to="/product/1" className={`text-sm font-medium flex items-center gap-1 ${isActive('/product/1')} hover:text-delivery-primary transition-colors`}>
            <Package className="w-4 h-4" />
            <span>Featured Item</span>
          </Link>
          {/* Intentional 404 links */}
          <Link to="/account" className={`text-sm font-medium flex items-center gap-1 ${isActive('/account')} hover:text-delivery-primary transition-colors`}>
            <User className="w-4 h-4" />
            <span>Account</span>
          </Link>
          <Link to="/favorites" className={`text-sm font-medium flex items-center gap-1 ${isActive('/favorites')} hover:text-delivery-primary transition-colors`}>
            <Heart className="w-4 h-4" />
            <span>Favorites</span>
          </Link>
          <Link to="/settings" className={`text-sm font-medium flex items-center gap-1 ${isActive('/settings')} hover:text-delivery-primary transition-colors`}>
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5 text-delivery-dark" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/favorites">
              <Heart className="h-5 w-5 text-delivery-dark" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-delivery-primary text-delivery-primary hover:bg-delivery-secondary">
            <User className="h-4 w-4 mr-2" />
            <span>Sign in</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
