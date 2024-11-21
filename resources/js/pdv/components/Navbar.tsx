import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/react/pdv" className="text-white text-xl font-bold">
          PDV System
        </Link>
        <div className="space-x-4">
          <Link to="/react/pdv/sales" className="text-white hover:text-gray-200">
            Ventas
          </Link>
          <Link to="/react/pdv/inventory" className="text-white hover:text-gray-200">
            Inventario
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;