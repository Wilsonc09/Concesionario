import 'styles/styles.css'

import Admin from 'pages/admin/Index';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';

import {DarkModeContext} from 'context/darkMode';
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    console.log('modo dark', darkMode);
  },[darkMode]);

  return (
    <div className='App'>
      <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
        <Router>
          <Routes>
            <Route path='/admin/perfil' element={<PrivateLayout><Clientes/></PrivateLayout>}></Route>
            <Route path='/admin/vehiculos' element={<PrivateLayout><Vehiculos/></PrivateLayout>}></Route>
            <Route path='/admin/ventas' element={<PrivateLayout><Clientes/></PrivateLayout>}></Route>
            <Route path='/admin/usuarios' element={<PrivateLayout><Clientes/></PrivateLayout>}></Route>
            <Route path='/admin' element={<PrivateLayout><Admin/></PrivateLayout>}></Route>
            <Route path='/login' element={<AuthLayout><Login/></AuthLayout>}></Route>
            <Route path='/registro' element={<AuthLayout><Registro/></AuthLayout>}></Route>
            <Route path='/' element={<PublicLayout><Index/></PublicLayout>}></Route>
          </Routes>
        </Router>
      </DarkModeContext.Provider>
      
    </div>
    
  );
}

export default App;
