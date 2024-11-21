import React from 'react';

const Clients: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Gestión de Clientes</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-user-plus"></i> Nuevo Cliente
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Cliente Ejemplo</td>
                                    <td>cliente@ejemplo.com</td>
                                    <td>123-456-7890</td>
                                    <td>
                                        <button className="btn btn-info btn-sm mr-1">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;  // Asegúrate de que esta línea esté presente