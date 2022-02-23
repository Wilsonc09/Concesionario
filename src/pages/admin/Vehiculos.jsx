import React, {useEffect, useState} from 'react'

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

  useEffect(()=>{
    //obtener lista de vehiculos desde el backend
    setVehiculos(vehiculoss)
  },[]);

  useEffect(()=>{
    if(mostrarTabla){
      setnomBoton("Crear Nuevo")
    }
    else{
      setnomBoton("Ver Todos")
    }
  }
    ,[mostrarTabla]);

  return (
    <div className='flex h-full w-full flex-col items-center justify-start'>
      <div className='flex flex-col p-8'>
        <h2 className='text-3xl text-gray-900 font-extrabold'>Pagina de administración de vehiculos</h2>
      
        <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className=' text-white bg-indigo-500 p-5 rounded-full w-28 self-end'>
          {nomBoton}
        </button>
      </div>
      
      {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos}/> : <Formulario/>}
      
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

const Formulario =()=>{
  return(
    <div className='felx flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehiculo</h2>
      <form className='grid grid-cols-2'>
        <input className='bg-gray-50 border border-gray-600 rounded-lg m-2' type="text" />
        <input className='bg-gray-50 border border-gray-600 rounded-lg m-2' type="text" />
        <input className='bg-gray-50 border border-gray-600 rounded-lg m-2' type="text" />
        <input className='bg-gray-50 border border-gray-600 rounded-lg m-2' type="text" />
        <button className='col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-700'>Guardar</button>
      </form>
    </div>
  )
}

export default Vehiculos