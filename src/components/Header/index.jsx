import React from 'react';
import './index.scss'

export default function Header() {
  return (
    <div className='header-container'>
        <div className="wrapper">
            <a href="#" className='logo'>
                Logo Goes Here
            </a>
            <ul className="navbar">
                <li>
                    <a href="/">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="/servicios">
                        Servicios
                    </a>
                </li>
                <li>
                    <a href="/sucursales">
                        Sucursales
                    </a>
                </li>
                <li>
                    <a href="/contacto">
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
