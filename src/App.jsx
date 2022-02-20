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

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<AuthLayout><Login/></AuthLayout>}></Route>
        <Route path='/registro' element={<AuthLayout><Registro/></AuthLayout>}></Route>
        <Route path='/admin' element={<PrivateLayout><Admin/></PrivateLayout>}></Route>
        <Route path='/admin/clientes' element={<PrivateLayout><Clientes/></PrivateLayout>}></Route>
        <Route path='/admin/vehiculos' element={<PrivateLayout><Vehiculos/></PrivateLayout>}></Route>
        <Route path='/' element={<PublicLayout><Index/></PublicLayout>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
