import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarResponsive = () => {
    const [mostrarNav, setMostrarNav] = useState(false)

    return (
        <div className='md:hidden ' onClick={()=>{setMostrarNav(!mostrarNav)}}>
            <i className={`fas fa-${mostrarNav ? 'times' : 'bars'} hover:text-yellow-600`}></i>

            {mostrarNav && <ul>
                <Ruta icono={'fas fa-user'} ruta='/admin/perfil' nombre='Perfil'/>
                <Ruta icono={'fas fa-car'} ruta='/admin/vehiculos' nombre='Vehiculos'/>
                <Ruta icono={'fas fa-cash-register'} ruta='/admin/ventas' nombre='Ventas'/>
                <Ruta icono={'fas fa-users'} ruta='/admin/usuarios' nombre='Ususarios'/>
            </ul>}
        </div>
    )
}

const Ruta = ({icono, ruta, nombre})=>{
    return(
      <Link to={ruta}>
          <li className='mx-2 my-1 p-1 text-white bg-indigo-700 hover:bg-indigo-500 w-full flex items-center'>
            <i className={`${icono} w-10`}></i>
            {nombre}
          </li>
      </Link>
    )
  };

export default SidebarResponsive