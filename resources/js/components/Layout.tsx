/** @jsxRuntime classic */
/** @jsx React.createElement */
import * as React from 'react';
import type { FC } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Layout: FC = () => {
    const location = useLocation();

    const getPageTitle = React.useCallback(() => {
        switch (location.pathname) {
            case '/react': return 'Dashboard';
            case '/react/pdv/clients': return 'Clientes';
            case '/react/pdv/products': return 'Productos';
            default: return 'Dashboard';
        }
    }, [location.pathname]);

    return React.createElement(
        React.Fragment,
        null,
        React.createElement('div', { className: 'wrapper' },
            React.createElement('div', { className: 'content-wrapper' },
                React.createElement('section', { className: 'content-header' },
                    React.createElement('div', { className: 'container-fluid' },
                        React.createElement('div', { className: 'row mb-2' },
                            React.createElement('div', { className: 'col-sm-6' },
                                React.createElement('h1', null, getPageTitle())
                            ),
                            React.createElement('div', { className: 'col-sm-6' },
                                React.createElement('ol', { className: 'breadcrumb float-sm-right' },
                                    React.createElement('li', { className: 'breadcrumb-item' },
                                        React.createElement(Link, { to: '/react' }, 'Inicio')
                                    ),
                                    React.createElement('li', { className: 'breadcrumb-item active' },
                                        getPageTitle()
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement('section', { className: 'content' },
                    React.createElement(Outlet, null)
                )
            )
        )
    );
};

export default Layout;