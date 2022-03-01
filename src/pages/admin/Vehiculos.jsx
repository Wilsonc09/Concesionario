import React, {useEffect, useState, useRef} from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { nanoid } from 'nanoid';

import Tooltip from '@mui/material/Tooltip';
import { Dialog } from '@mui/material';

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
    <div className='flex h-full flex-col items-center justify-start w-full'>
      <div className='flex flex-col p-8 w-full'>
        <h2 className='text-3xl text-gray-900 font-extrabold'>Pagina de administración de vehiculos</h2>
      
        <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} 
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full w-28 self-end`}>
          {nomBoton}
        </button>
      </div>
      
      {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos}/> : 
      <Formulario setMostrarTabla={setMostrarTabla} listaVehiculos={vehiculos} setVehiculos={setVehiculos}/>}

      <ToastContainer position="bottom-center" autoClose={5000}/>
      
    </div>
  )
}

const TablaVehiculos =( {listaVehiculos})=>{

  const form = useRef(null);

  useEffect(()=>{
    //console.log("esta es la informacion que llega de los vehiculos", listaVehiculos);
  },[listaVehiculos])

  /////////busqueda 
  const [vehFiltro, setVehFiltro] = useState(listaVehiculos)
  const [buscar, setBuscar] = useState('');

  useEffect(()=>{
    setVehFiltro(
      listaVehiculos.filter(elemento=>{
      return JSON.stringify(elemento).toLowerCase().includes(buscar.toLowerCase());
      })
    )
    
  },[buscar, listaVehiculos])



  const submitEdit = (e)=>{
    e.preventDefault();
    const fd = new FormData(form.current)
    console.log(e);

  }
  return(
    <div className='flex flex-col items-center justify-center w-full'>
      <input
        value={buscar}
        onChange={e=>{setBuscar(e.target.value)}} 
        placeholder='Buscar' 
        className='border-2 border-gray-700 px-4 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'
      />
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehiculos</h2>
      <form ref={form} onSubmit={submitEdit} className='w-full'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre del Vehiculo</th>
              <th>Marca del vehiculo</th>
              <th>Modelo del vehiculo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehFiltro.map((vehiculo)=>{
              return(
                <FilaVehiculo key={nanoid()} vehiculo={vehiculo}/>
              )
            })}
          </tbody>
        </table>
      </form>
    </div>
  )
}

const FilaVehiculo = ({vehiculo})=>{
  const [openDiag, setOpenDiag] = useState(false)
  const [edit,setEdit] = useState(false);
  const [infoNewVeh, setInfoNewVeh] = useState(
    {
      nombre: vehiculo.nombre,
      marca: vehiculo.marca,
      modelo: vehiculo.modelo
    }
  );

  const actualizarVeh = ()=>{
    console.log(infoNewVeh);
    //enviar info al backend
  }


  return(
    <tr>
      {edit? (
        <>
          <td><input onChange={e=>setInfoNewVeh({...infoNewVeh, nombre: e.target.value})} type="text" className='bg-gray-50 border border-gray-600 rounded-lg p-2 m-2' value={infoNewVeh.nombre} /></td>
          <td><input onChange={e=>setInfoNewVeh({...infoNewVeh, marca: e.target.value})} type="text" className='bg-gray-50 border border-gray-600 rounded-lg p-2 m-2' value={infoNewVeh.modelo} /></td>
          <td><input onChange={e=>setInfoNewVeh({...infoNewVeh, modelo: e.target.value})} type="text" className='bg-gray-50 border border-gray-600 rounded-lg p-2 m-2' value={infoNewVeh.marca} /></td>
        </>
      ): (
        <>
          <td>{vehiculo.nombre}</td>
          <td>{vehiculo.marca}</td>
          <td>{vehiculo.modelo}</td>
        </>
      )
      }
      
      <td>
        <div className='flex w-full justify-around'>
          {edit? (
            <>
              <Tooltip title='Actualizar'>
                <i onClick={()=>{actualizarVeh()}} className=' fas fa-check text-green-700 hover:text-green-400'/>
              </Tooltip>

              <Tooltip title='Cancelar' arrow>
                <i className='fas fa-ban text-red-700 hover:text-red-400'/>
              </Tooltip>
            </>
            
            
            
          ):
          (
            <>
              <Tooltip title='Editar' arrow>
                <i onClick={()=>{setEdit(!edit)}} className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-400'/>
              </Tooltip>
              
              <Tooltip title='Eliminar' arrow>
                <i onClick={()=>{setOpenDiag(true)}} className='fas fa-trash text-red-700 hover:text-red-400'/>
              </Tooltip>
            </>
            
          )}
          
        </div>
        <Dialog open={openDiag}>
          <div className='p-8 flex flex-col'>
            <h1 className=' text-gray-900 text-2xl font-bold'>Are you sure?</h1>
            <div className='flex w-full justify-center'>
              <button className='mx-2 my-4 px-4 py-2 bg-green-500 text-white hover:bg-red-700 rounded-md shadow-md'>Sí</button>
              <button onClick={()=>{setOpenDiag(false)}} className='mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'>
                No
              </button>
            </div>
            
          </div>
        </Dialog>
      </td>
    </tr>
  )
}

const Formulario =({setMostrarTabla, listaVehiculos, setVehiculos})=>{
  const form = useRef(null);

  const submitForm =(e)=>{
    e.preventDefault();  //evita que el submit del boton joda
    const fd = new FormData(form.current)
    //console.log(form.current);

    const newVehiculo ={}
    fd.forEach((value,key)=>{
      newVehiculo[key]=value;
      //console.log(key,value);
    });

    setMostrarTabla(true)
    toast.success('vehiculo agreado')
    setVehiculos([...listaVehiculos, newVehiculo])
  }

  return(
    <div className='felx flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehiculo</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor="nombre">
          <input name='nombre' className='bg-gray-50 border border-gray-600 rounded-lg m-2' type="text" placeholder='Corola' 
          required/>
          Nombre del vehiculo
        </label>
        <label className='flex flex-col' htmlFor="marca">
          Marca del vehiculo
          <select
          name='marca'
          required
          defaultValue={0} 
          className='bg-gray-50 border border-gray-600 rounded-lg m-2'>
            <option disabled value={0}>Seleccione una</option>
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
          required
           />
        </label>
        
        <button 
        type='submit'
        className='col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-700'>Guardar</button>
      </form>
    </div>
  )
}

export default Vehiculos