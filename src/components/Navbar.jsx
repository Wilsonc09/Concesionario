import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' bg-red-300'>
      <ul className='flex w-full justify-between my-3'>
        <li><img src="" alt="Logo" /></li>
        <li>Pagina 1</li>
        <li>Pagina 1</li>
        <li>Pagina 1</li>
        <li className=' px-3'>
          <Link to='/login'>
            <button className=' bg-indigo-500 py-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>
              Iniciar sesion
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar