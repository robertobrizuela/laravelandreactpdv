import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const Sales: React.FC = () => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [total, setTotal] = React.useState(0);

  // Productos de ejemplo
  const products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100, stock: 10 },
    { id: 2, name: 'Producto 2', price: 200, stock: 15 },
    { id: 3, name: 'Producto 3', price: 150, stock: 20 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Punto de Venta</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Lista de Productos */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Productos</h2>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded">
                <h3 className="font-semibold">{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                  Agregar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Carrito */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Carrito</h2>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-2">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: ${total}</h3>
            <button
              onClick={() => {
                setCart([]);
                setTotal(0);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-full"
            >
              Completar Venta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;