import * as React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Layout() {
    const location = useLocation();

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/react': return 'Dashboard';
            case '/react/pdv/clients': return 'Clientes';
            default: return 'Dashboard';
        }
    };

    return (
        <div className="content-wrapper">
            {/* Content Header */}
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
                                <li className="breadcrumb-item active">{getPageTitle()}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="content">
                <Outlet />
            </section>
        </div>
    );
}