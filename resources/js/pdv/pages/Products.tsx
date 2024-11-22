import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
  category: string;
  image_url?: string;
  active: boolean;
}

interface Category {
  id: number;
  name: string;
}

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category_id: 0,
    active: true
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/products');
      setProducts(response.data);
    } catch (error) {
      toast.error('Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStock = async (id: number, newStock: number) => {
    try {
      await axios.put(`/api/v1/products/${id}`, { stock: newStock });
      toast.success('Stock actualizado');
      fetchProducts();
    } catch (error) {
      toast.error('Error al actualizar el stock');
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await axios.delete(`/api/v1/products/${id}`);
        toast.success('Producto eliminado');
        fetchProducts();
      } catch (error) {
        toast.error('Error al eliminar el producto');
      }
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/v1/categories');
      setCategories(response.data);
    } catch (error) {
      toast.error('Error al cargar las categorías');
    }
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/v1/products', newProduct);
      toast.success('Producto creado exitosamente');
      fetchProducts();
      setNewProduct({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category_id: 0,
        active: true
      });
      const modal = document.getElementById('modal-nuevo-producto');
      if (modal) {
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance?.hide();
      }
    } catch (error) {
      toast.error('Error al crear el producto');
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary w-100"
            data-toggle="modal"
            data-target="#modal-nuevo-producto"
          >
            + Nuevo Producto
          </button>
        </div>
      </div>

      <div className="row">
        {loading ? (
          <div className="col-12 text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Categoría: {product.category}
                    </small>
                  </p>
                  <p className="card-text">
                    Precio: ${product.price}
                  </p>
                  <p className="card-text">
                    Stock: {product.stock}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="modal fade" id="modal-nuevo-producto" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Nuevo Producto</h4>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <form onSubmit={handleCreateProduct}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Descripción</label>
                  <textarea
                    className="form-control"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Precio</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: parseInt(e.target.value)})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Categoría</label>
                  <select
                    className="form-control"
                    value={newProduct.category_id}
                    onChange={(e) => setNewProduct({...newProduct, category_id: parseInt(e.target.value)})}
                    required
                  >
                    <option value="">Seleccione una categoría</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;