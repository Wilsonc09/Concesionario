import React, {useEffect, useState} from 'react'

const Vehiculos = () => {

  //Realizar un formulario que le pida su edad y muestre si es mayor de edad
  const [edad, setEdad] = useState(0);
  const [esMenor, setEsMenor] = useState(false);

  useEffect(()=>{
    if (edad>=18){
      setEsMenor(false)
    }
    else{
      setEsMenor(true)
    }

  },[edad])


  ////////////////////////////////

  const [NombreVeh, setNombreVeh] =useState("") //una variable vacia

  useEffect(()=>{
     //una funcion que se ejecuta cuando cambia las dependencias
    console.log("la var esta en:", NombreVeh);
  },[NombreVeh])

  const mandarBack =()=>{
    console.log("el valor del nombre es", NombreVeh);
  }

  return (
    <form className='flex flex-col '>
      <h2>Formulario de creacion de vehiculos</h2>
      <input type="number" value={edad} onChange={(e)=>{setEdad(e.target.value)}} placeholder='edad' />

      <input type="text" onChange={(e)=>{setNombreVeh(e.target.value)}} placeholder='nombre del vehiculo'/>
      <input type="text" placeholder='marca'/>
      <input type="text" placeholder='modelo'/>
      <button onClick={mandarBack} type='button' className=' bg-indigo-500 text-white '>Enviar</button>

      {esMenor ? <span className=' text-3xl text-red-500'>Usted es menor de edad</span>:
      <span className=' text-3xl text-green-500'>Usted es mayor de edad</span>
      }
    </form>
  )
}

export default Vehiculos