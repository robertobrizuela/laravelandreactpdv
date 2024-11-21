// Copia el contenido de src/pages/Home.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Sistema PDV</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/react/pdv/sales"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Ventas
        </Link>
        <Link
          to="/react/pdv/inventory"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Inventario
        </Link>
      </div>
    </div>
  )
}

export default Home