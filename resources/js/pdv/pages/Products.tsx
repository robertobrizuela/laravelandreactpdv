import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Producto 1', price: 100, stock: 10, category: 'Electrónicos' },
    { id: 2, name: 'Producto 2', price: 200, stock: 15, category: 'Ropa' },
    { id: 3, name: 'Producto 3', price: 150, stock: 20, category: 'Alimentos' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const categories: string[] = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    let result = products;
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Gestión de Productos</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                <li className="breadcrumb-item active">Productos</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Filtros de Búsqueda</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Buscar Producto</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar por nombre..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Categoría</label>
                    <select
                      className="form-control"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">Todas las categorías</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Lista de Productos</h3>
              <div className="card-tools">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  data-toggle="modal" 
                  data-target="#modal-nuevo-producto"
                >
                  <i className="fas fa-plus"></i> Nuevo Producto
                </button>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          style={{ width: '80px' }}
                          value={product.stock}
                          onChange={(e) => {
                            const newProducts = products.map(p =>
                              p.id === product.id ? { ...p, stock: Number(e.target.value) } : p
                            );
                            setProducts(newProducts);
                          }}
                        />
                      </td>
                      <td><span className="badge bg-primary">{product.category}</span></td>
                      <td>
                        <button className="btn btn-info btn-sm mr-1">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => setProducts(products.filter(p => p.id !== product.id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;