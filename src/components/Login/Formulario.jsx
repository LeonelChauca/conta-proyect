import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock,faUser} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import { jwtDecode } from "jwt-decode";
import { Formik } from 'formik';
import BotonGoogle from './BotonGoogle';
const Formulario = () => {

    const alertOk=(usuario,contrasenia)=>{
        Swal.fire({
            title: "Inicio de Sesion Correcta!",
            text: `Usuario : ${usuario}, contrasenia ${contrasenia}`,
            icon: "success"
        })
    }
  return (

    <Formik action="" 
        initialValues={{
            usuario:"",
            contrasenia:"",
        }}
        validate={(values)=>{

        }}
        onSubmit={(values)=>{
            console.log(values)
            alertOk(values.usuario,values.contrasenia)
        }}>
        
        {({values,errors,handleSubmit,handleChange,handleBlur})=>(
            <form action="" className=' m-auto ' onSubmit={handleSubmit}>
                <div className="relative w-11/12 m-auto mb-12">
                <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                <input 
                    type="text" 
                    className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                    placeholder='Usuario'
                    name='usuario'
                    value={values.usuario}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
            </div>
            <div className="relative w-11/12 m-auto my-12">
                <FontAwesomeIcon icon={faLock} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                <input 
                    type="password" 
                    className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                    placeholder='Contraseña'
                    name='contrasenia'
                    value={values.contrasenia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
            </div>
            <div className='w-11/12 m-auto my-6'>
                <button className='w-full h-10 bg-botonOk rounded-lg text-white font-candal' type='submit'>Ingresar</button>
            </div>
            <div className='w-11/12 m-auto my-6'>
                <button className='w-full h-10 bg-botonAccept rounded-lg text-white font-candal'>Registrar</button>
            </div>

            <div className='w-11/12 flex justify-center m-auto'>
                <BotonGoogle/>
            </div>

            <div className='w-11/12 m-auto mt-24 pb-5'>
                <button className='w-full h-10 bg-botonNotOk rounded-lg text-white font-candal'>Olvido su contraseña</button>
            </div>
            </form>
        )}
        
        
    </Formik>
  )
}

export default Formulario
