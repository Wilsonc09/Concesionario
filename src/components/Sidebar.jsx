import React, { useState, useEffect } from 'react'
import Logo from 'media/logo.jpg'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className='hidden md:flex md:w-72 border border-gray-50 h-full flex-col  bg-gray-200 p-4'>
      <Link to='/admin'>
        <img className='mx-auto h-40 w-auto' src={Logo} alt="aqui va el logo" />
      </Link>
      <div className='my-4'>
        <Ruta icono={'fas fa-user'} ruta='/admin/perfil' nombre='Perfil'/>
        <Ruta icono={'fas fa-car'} ruta='/admin/vehiculos' nombre='Vehiculos'/>
        <Ruta icono={'fas fa-cash-register'} ruta='/admin/ventas' nombre='Ventas'/>
        <Ruta icono={'fas fa-users'} ruta='/admin/usuarios' nombre='Ususarios'/>
      </div>
      <button>Cerrar Sesion</button>
    </nav>
  )
};

const Ruta = ({icono, ruta, nombre})=>{
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    console.log(location);
    if(location.pathname.includes(ruta)){
      setIsActive(true);
    }
    else{
      setIsActive(false);
    }
  }, [location, ruta])
  

  return(
    <Link to={ruta}>
        <button className= {`my-1 p-1 text-white rounded-md bg-${isActive ? 'indigo': 'gray'}-700 hover:bg-indigo-500 w-full flex items-center`}>
          <i className={`${icono} w-10`}></i>
          {nombre}
        </button>
    </Link>
  )
};

export default Sidebar