import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// Configura axios para incluir el token CSRF
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
axios.defaults.withCredentials = true;

interface Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
}

interface ClientForm {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
}

export function Clients() {
    // Estados
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingClient, setEditingClient] = useState<Client | null>(null);
    const [formData, setFormData] = useState<ClientForm>({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: ''
    });

    // Cargar clientes al montar el componente
    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/clients');
            setClients(response.data);
        } catch (error) {
            toast.error('Error al cargar los clientes');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingClient) {
                await axios.put(`/api/clients/${editingClient.id}`, formData);
                toast.success('Cliente actualizado exitosamente');
            } else {
                await axios.post('/api/clients', formData);
                toast.success('Cliente creado exitosamente');
            }
            setShowModal(false);
            setEditingClient(null);
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                city: ''
            });
            loadClients();
        } catch (error: any) {
            if (error.response?.data?.errors) {
                Object.values(error.response.data.errors).forEach((error: any) => {
                    toast.error(error[0]);
                });
            } else {
                toast.error('Error al guardar el cliente');
            }
        }
    };

    const handleEdit = (client: Client) => {
        setEditingClient(client);
        setFormData({
            name: client.name,
            email: client.email,
            phone: client.phone,
            address: client.address,
            city: client.city
        });
        setShowModal(true);
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm('¿Estás seguro de eliminar este cliente?')) return;
        
        try {
            await axios.delete(`/api/clients/${id}`);
            toast.success('Cliente eliminado exitosamente');
            loadClients();
        } catch (error) {
            toast.error('Error al eliminar el cliente');
            console.error('Error:', error);
        }
    };

    return (
        <div className="container-fluid">
            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {editingClient ? 'Editar Cliente' : 'Nuevo Cliente'}
                                </h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Teléfono</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Dirección</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ciudad</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        {editingClient ? 'Actualizar' : 'Guardar'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabla */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Gestión de Clientes</h3>
                    <div className="card-tools">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={() => {
                                setEditingClient(null);
                                setFormData({
                                    name: '',
                                    email: '',
                                    phone: '',
                                    address: '',
                                    city: ''
                                });
                                setShowModal(true);
                            }}
                        >
                            <i className="fas fa-user-plus"></i> Nuevo Cliente
                        </button>
                    </div>
                </div>
                <div className="card-body table-responsive p-0">
                    {loading ? (
                        <div className="text-center p-4">
                            <i className="fas fa-spinner fa-spin fa-2x"></i>
                        </div>
                    ) : (
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    <th>Dirección</th>
                                    <th>Ciudad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map(client => (
                                    <tr key={client.id}>
                                        <td>{client.id}</td>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>{client.phone}</td>
                                        <td>{client.address}</td>
                                        <td>{client.city}</td>
                                        <td>
                                            <button 
                                                className="btn btn-info btn-sm mr-1"
                                                onClick={() => handleEdit(client)}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(client.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}