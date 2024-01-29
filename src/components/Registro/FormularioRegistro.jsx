import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard,faCalendar,faEnvelope,faLock,faPhone,faUser, faUserGroup, faXmark} from '@fortawesome/free-solid-svg-icons'
import './formulario.css'
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import { Formik } from 'formik';
import axios from 'axios'
import { validacionRegistro } from './validacionRegistro';
import { Navigate, useNavigate } from 'react-router-dom';


export const FormularioRegistro = () => {
    let navigate=useNavigate();
    const alertOk=()=>{
        Swal.fire({
            title: "Usuario Creado!",
            text: `Bienvenido !`,
            icon: "success",
            confirmButtonText: "Iniciar Sesion",
        }
        ).then((result)=>{
            if(result.isConfirmed){
                navigate('/')
            }
        }
        
        )
    }
    const alertError=()=>{
        Swal.fire({
            title: "Error al crear Usuario!",
            text: `El correo ya esta registrado`,
            icon: "error"
        })
    }
    const alertConfirm= async(correo,action)=>{
        let firma=false;
        try{
            const {value: codigo}= Swal.fire({
                title:"Verificacion de correo",
                input:"text",
                inputLabel:"Ingrese el codigo de verificacion enviado a su correo",
                cancelButtonText:"Cancelar",
                showCancelButton:true,
                inputValidator:(value)=>{
                    return new Promise((resolve)=>{
                        axios.get(`https://backend-2-gcwv.onrender.com/api/usuario/registro/${value}`)
                            .then(response=>{
                                resolve();
                                action.setSubmitting(false)
                                firma=true
                            })
                            .catch(error=>{
                                console.error('Error al realizar la solicitud:', error);
                                resolve("El codigo es incorrecto");
                                firma=false
                            })
                            .finally(()=>{
                                if(firma){
                                    alertOk();
                                    
                                }
                            })
                    })
                }
            }).then((result)=>{
                if(result.isDismissed){
                    action.setSubmitting(false)
                }
            } )
        }
        catch (error) {
            
        }
    }

  return (
    <Formik
        initialValues={{
            ci:"",
            nombres:"",
            apPaterno:"",
            apMaterno:"",
            fecha_nac:"",
            genero:"Genero",
            correo:"",
            telefono:"",
            contrasenia:"",
        }}
        validationSchema={validacionRegistro}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values,actions)=>{
            axios.post('https://backend-2-gcwv.onrender.com/api/usuario/registro', values)
                .then(response => {
                    console.log('Respuesta del servidor:', response.data);
                    console.log('mensaje enviado');
                    alertConfirm(values.correo,actions)
                })
                .catch(error => {
                console.error('Error al hacer la solicitud:', error);
                })
                .finally(() => {
            });  
        }}
        >
            {({values,isSubmitting,isValidating,errors,handleSubmit,handleChange,handleBlur})=>(

                <form className='grid grid-cols-4 px-4 m-auto' onSubmit={handleSubmit}>
                    <div className='col-span-1 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto lg:pr-1">
                            <FontAwesomeIcon icon={faAddressCard} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <InputMask 
                                type="text"
                                maskChar=""
                                mask="9999999999" 
                                className=" bg-boton  w-full pl-10  pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                                placeholder='CI'
                                name='ci'
                                value={values.ci}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.ci && <div className=' flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.ci}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.ci && (<div className='h-8'></div>)}
                    </div>
                    <div className='lg:col-span-3 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto lg:pl-1">
                        <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                        <input 
                            type="text" 
                            className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                            placeholder='Nombres'
                            name='nombres'
                            value={values.nombres}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        </div>
                        {errors.nombres && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.nombres}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.nombres && (<div className='h-8'></div>)}
                    </div>
                    
                    <div className='lg:col-span-2 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto lg:pr-1">
                            <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <input 
                                type="text" 
                                className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                                placeholder='Apellido Paterno'
                                name='apPaterno'
                                value={values.apPaterno}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.apPaterno && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.apPaterno}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.apPaterno && (<div className='h-8'></div>)}
                    </div>
                    <div className='lg:col-span-2 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto lg:pl-1">
                            <FontAwesomeIcon icon={faUser} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <input 
                                type="text" 
                                className=" bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500" 
                                placeholder='Apellido Materno'
                                name='apMaterno'
                                value={values.apMaterno}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.apMaterno && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.apMaterno}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.apMaterno && (<div className='h-8'></div>)}
                    </div>
                    
                    <div className='lg:col-span-2 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto lg:pr-1">
                            <FontAwesomeIcon icon={faCalendar} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <InputMask
                                type="text"
                                className='bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500'
                                mask="99/99/9999"
                                placeholder='Fecha de Nacimiento (Dia/Mes/Año)'
                                name='fecha_nac'
                                alwaysShowMask={false}
                                value={values.fecha_nac}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.fecha_nac && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.fecha_nac}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.fecha_nac && (<div className='h-8'></div>)}
                    </div>

                    <div className='lg:col-span-2 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto lg:pl-1">
                            <FontAwesomeIcon icon={faUserGroup} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <select 
                                id="genero" 
                                name="genero" 
                                className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500"
                                value={values.genero}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                >
                                <option value="Genero" disabled hidden>Genero</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                        {errors.genero && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.genero}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.genero && (<div className='h-8'></div>)}
                    </div>                    
                    
                    <div className='lg:col-span-4 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto ">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <input 
                                type='text' 
                                placeholder='Correo' 
                                name="correo" 
                                className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500"
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.correo && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.correo}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.correo && (<div className='h-8'></div>)}
                    </div>
                    
                    <div className='lg:col-span-4 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto ">
                            <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <InputMask 
                                type='text' 
                                maskChar='' 
                                mask='99999999' 
                                placeholder='Telefono' 
                                name="telefono"
                                className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500"
                                value={values.telefono}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.telefono && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.telefono}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.telefono && (<div className='h-8'></div>)}
                    </div>
                    <div className='lg:col-span-4 max-lg:col-span-4 mb-6'>
                        <div className="relative w-full mx-auto ">
                            <FontAwesomeIcon icon={faLock} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
                            <input 
                                type='password' 
                                placeholder='Contraseña' 
                                name="contrasenia" 
                                className="bg-boton  w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 font-candal placeholder-gray-500"
                                value={values.contrasenia}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.contrasenia && <div className='flex justify-between border-l-4 rounded-sm border-red-500 text-red-700 p-1 text-sm'><p>{errors.contrasenia}</p><FontAwesomeIcon icon={faXmark} className="  text-red-700 text-lg"/></div>}
                        {!errors.contrasenia && (<div className='h-8'></div>)}
                    </div>
                    <div className='w-11/12 mx-auto my-6 lg:col-span-4 mb-12 max-lg:col-span-4'>
                        <button className={`w-full h-10 bg-botonOk rounded-lg text-white font-candal ${isSubmitting || isValidating ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSubmitting || isValidating} type='submit' >{isSubmitting || isValidating ? 'Cargando...':'Registrar Usuario'}</button>
                    </div>
                </form>
            )}
    </Formik>
  )
}
