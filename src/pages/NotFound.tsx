
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-delivery-light">
      <NavBar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <AlertCircle className="mx-auto h-16 w-16 text-delivery-primary mb-4" />
          <h1 className="text-4xl font-bold mb-4 text-delivery-dark">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500 mb-8">
            We're working on adding more features to DeliverEase. This page will be available soon!
          </p>
          <Button asChild className="bg-delivery-primary hover:bg-delivery-primary/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
