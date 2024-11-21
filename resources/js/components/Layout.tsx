import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

interface NavItem {
    to: string;
    icon: string;
    text: string;
}

const Layout: React.FC = () => {
    const location = useLocation();
    const navItems: NavItem[] = [
        { to: "/react", icon: "fas fa-home", text: "Inicio" },
        { to: "/react/pdv/sales", icon: "fas fa-cash-register", text: "Ventas" },
        { to: "/react/pdv/products", icon: "fas fa-boxes", text: "Productos" },
        { to: "/react/pdv/clients", icon: "fas fa-users", text: "Clientes" },
        { to: "/react/pdv/activity", icon: "fas fa-chart-line", text: "Actividad" },
        { to: "/react/pdv/map", icon: "fas fa-map-marked-alt", text: "Mapa" },
    ];

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/react': return 'Dashboard';
            case '/react/pdv/sales': return 'Ventas';
            case '/react/pdv/products': return 'Productos';
            case '/react/pdv/clients': return 'Clientes';
            case '/react/pdv/activity': return 'Actividad';
            case '/react/pdv/map': return 'Mapa';
            default: return 'Dashboard';
        }
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{getPageTitle()}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to="/react">Inicio</Link>
                                </li>
                                {location.pathname !== '/react' && (
                                    <li className="breadcrumb-item active">
                                        {getPageTitle()}
                                    </li>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default Layout;