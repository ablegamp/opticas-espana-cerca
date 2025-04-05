
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: Página no encontrada");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-optica-blue mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">¡Ups! Página no encontrada</p>
        <p className="text-gray-500 mb-8">
          La página que estás buscando no existe o ha sido movida a otra ubicación.
        </p>
        <Button asChild className="bg-optica-blue hover:bg-blue-800 inline-flex items-center">
          <Link to="/">
            <Home size={18} className="mr-2" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
