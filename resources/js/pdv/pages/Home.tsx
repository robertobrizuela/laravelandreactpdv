import React from 'react';

export function PDVHome() {
    // Estos datos podrían venir de una API o configuración
    const empresaInfo = {
        nombre: "ALIRICK",
        slogan: "Innovación y Calidad en cada Servicio",
        direccion: "Av. Principal #123, Ciudad",
        telefono: "(+51) 123-456-789",
        email: "contacto@alirick.com",
        horario: "Lunes a Viernes: 9:00 AM - 6:00 PM",
        estadisticas: {
            productos: 150,
            clientes: 80,
            ventas: 1200,
            ingresos: 25000
        }
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Panel de Control</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="container-fluid">
                    {/* Información de la Empresa */}
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-building mr-2"></i>
                                Información de la Empresa
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>{empresaInfo.nombre}</h2>
                                    <p className="lead">{empresaInfo.slogan}</p>
                                    <hr/>
                                    <p><i className="fas fa-map-marker-alt mr-2"></i>{empresaInfo.direccion}</p>
                                    <p><i className="fas fa-phone mr-2"></i>{empresaInfo.telefono}</p>
                                    <p><i className="fas fa-envelope mr-2"></i>{empresaInfo.email}</p>
                                    <p><i className="fas fa-clock mr-2"></i>{empresaInfo.horario}</p>
                                </div>
                                <div className="col-md-6 text-center">
                                    <img 
                                        src="/images/alogo.png" 
                                        alt="Logo Empresa" 
                                        className="img-fluid" 
                                        style={{ maxHeight: '200px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Estadísticas Rápidas */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{empresaInfo.estadisticas.productos}</h3>
                                    <p>Productos Registrados</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-box"></i>
                                </div>
                                <a href="#" className="small-box-footer">
                                    Más info <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{empresaInfo.estadisticas.clientes}</h3>
                                    <p>Clientes Activos</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <a href="#" className="small-box-footer">
                                    Más info <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{empresaInfo.estadisticas.ventas}</h3>
                                    <p>Ventas Realizadas</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <a href="#" className="small-box-footer">
                                    Más info <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>S/. {empresaInfo.estadisticas.ingresos}</h3>
                                    <p>Ingresos Totales</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <a href="#" className="small-box-footer">
                                    Más info <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}