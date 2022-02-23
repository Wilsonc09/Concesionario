import React, {useEffect, useState} from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//simulando un json del backend:
const vehiculoss = [
  {
    nombre: 'corola',
    marca: 'Toyota',
    modelo: 2014
  },
  {
    nombre: 'Sandero',
    marca: 'Renault',
    modelo: 2020
  },
  {
    nombre: 'corola',
    marca: 'Toyota',
    modelo: 2014
  },
  {
    nombre: 'corola',
    marca: 'Toyota',
    modelo: 2014
  },
  {
    nombre: 'corola',
    marca: 'Toyota',
    modelo: 2014
  },
]

const Vehiculos = () => {

  const [mostrarTabla, setMostrarTabla]= useState(true);
  const [vehiculos, setVehiculos] = useState([])
  const [nomBoton, setnomBoton] = useState("Crear Nuevo");
  const [colorBoton, setColorBoton] = useState('indigo')

  useEffect(()=>{
    //obtener lista de vehiculos desde el backend
    setVehiculos(vehiculoss)
  },[]);

  useEffect(()=>{
    if(mostrarTabla){
      setnomBoton("Crear Nuevo");
      setColorBoton('indigo')
    }
    else{
      setnomBoton("Ver Todos");
      setColorBoton('green')
    }
  }
    ,[mostrarTabla]);

  return (
    <div className='flex h-full w-full flex-col items-center justify-start'>
      <div className='flex flex-col p-8'>
        <h2 className='text-3xl text-gray-900 font-extrabold'>Pagina de administración de vehiculos</h2>
      
        <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} 
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full w-28 self-end`}>
          {nomBoton}
        </button>
      </div>
      
      {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos}/> : 
      <Formulario fncMostrarTabla={setMostrarTabla} listaVehiculos={vehiculos} fcnAgregarVehiculo={setVehiculos}/>}

      <ToastContainer position="bottom-center" autoClose={5000}/>
      
    </div>
  )
}

const TablaVehiculos =( {listaVehiculos})=>{
  useEffect(()=>{
    console.log("esta es la informacion que llega de los vehiculos", listaVehiculos);
  },[listaVehiculos])
  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehiculos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo)=>{
            return(
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const Formulario =({fncMostrarTabla, listaVehiculos, fcnAgregarVehiculo})=>{
  const [nombre, setNombre] =useState('');
  const [marca, setMarca] =useState('');
  const [modelo, setModelo] =useState('');

  const enviarBack = ()=>{
    console.log("nombre",nombre,'marca',marca,'modelo',modelo);
    if(nombre==='' || marca==='' || modelo===''){
      toast.error('ingrese bien')
    }
    else{
      toast.success('Vehiculo creado con exito');
      fncMostrarTabla(true)
      fcnAgregarVehiculo([...listaVehiculos,{nombre:nombre, marca:marca, modelo:modelo}]) //se agrega un nuevo vehiculo
    }
    
  }
  return(
    <div className='felx flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehiculo</h2>
      <form className='flex flex-col'>
        <label className='flex flex-col' htmlFor="nombre">
          Nombre del vehiculo
          <input name='nombre' className='bg-gray-50 border border-gray-600 rounded-lg m-2' type="text" placeholder='Corola' 
          value={nombre}
          required
          onChange={(e)=>{setNombre(e.target.value)}}/>
        </label>
        <label className='flex flex-col' htmlFor="marca">
          Marca del vehiculo
          <select
          required 
          value={marca}
          onChange={(e)=>{setMarca(e.target.value)}}
          className='bg-gray-50 border border-gray-600 rounded-lg m-2'>
            <option disabled>Seleccione una</option>
            <option>Renoult</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor="modelo">
          Modelo del vehiculo
          <input name='modelo' 
          className='bg-gray-50 border border-gray-600 rounded-lg m-2' type="number" placeholder='2014'
          min={1992}
          max={2022}
          value={modelo}
          required
          onChange={(e)=>{setModelo(e.target.value)}}
           />
        </label>
        
        <button 
        onClick={()=>{enviarBack()}}
        type='submit'
        className='col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-700'>Guardar</button>
      </form>
    </div>
  )
}

export default Vehiculos