import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard,faCalendar,faEnvelope,faLock,faPhone,faUser, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import './formulario.css'
import InputMask from 'react-input-mask';



export const FormularioRegistro = () => {
  return (
    <form className='grid grid-cols-4 px-4 m-auto'>
        <div className="relative w-11/12 mx-auto mb-12 col-span-1 max-lg:col-span-4">
            <FontAwesomeIcon icon={faAddressCard} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input 
                type="text" 
                className=" bg-boton  w-full pl-10  pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                placeholder='CI'
                name='Ci'
            />
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-3 max-lg:col-span-4">
            <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input 
                type="text" 
                className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                placeholder='Nombres'
                name='Nombre'
            />
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-2 max-lg:col-span-4">
            <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input 
                type="text" 
                className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                placeholder='Apellido Paterno'
                name='ApPaterno'
            />
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-2 max-lg:col-span-4">
            <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input 
                type="text" 
                className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                placeholder='Apellido Materno'
                name='ApMaterno'
            />
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-2 max-lg:col-span-4">
            <FontAwesomeIcon icon={faCalendar} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <InputMask
                type="text"
                className='bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500'
                mask="9999/99/99"
                placeholder='Fecha de Nacimiento (Año/Mes/Dia)'
            />
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-2 max-lg:col-span-4">
            <FontAwesomeIcon icon={faUserGroup} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <select id="genero" name="genero" className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500">
                <option value="opcion" disabled selected hidden>Genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-4 max-lg:col-span-4">
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input type='email' placeholder='correo' name="correo" className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500"/>
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-4 max-lg:col-span-4">
            <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <InputMask type='text' maskChar='' mask='99999999' placeholder='Telefono' name="Telefono" className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500"/>
        </div>
        <div className="relative w-11/12 mx-auto mb-12 lg:col-span-4 max-lg:col-span-4">
            <FontAwesomeIcon icon={faLock} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input type='password' placeholder='Contraseña' name="correo" className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500"/>
        </div>
        <div className='w-11/12 mx-auto my-6 lg:col-span-4 mb-12 max-lg:col-span-4'>
                <button className='w-full h-10 bg-botonOk rounded-lg text-white font-candal' type='submit'>Registrar Usuario</button>
        </div>
    </form>
  )
}
