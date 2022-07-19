import React from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login',{
            replace:true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse w-100">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/calculoHC"
                        >
                        Calculo de HC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/registrarMedicion"
                    >
                        Registrar Medicion
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/vincularTrabajador"
                    >
                        Vincular Trabajador
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/visualizarReporte"
                    >
                        Visualizar Reporte
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Javier
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                            Logout
                    </button>

                    {/* <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}