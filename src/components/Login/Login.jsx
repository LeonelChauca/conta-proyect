import React from 'react'
import Formulario from './Formulario'
const Login = () => {
  return (
    <div className=' w-full h-screen  bg-main3 flex items-center'>
      <div className=' w-11/12 flex max-w-screen-xl m-auto'>
        <div className='w-11/12 h-4/6 bg-white m-auto max-lg:rounded-lg lg:w-1/2'>
              <h2 className=' text-center text-2xl font-candal py-12'>INICIAR SESION</h2>
              <Formulario />
        </div>
        <div className=' lg:w-1/2 max-lg:hidden '>
          <img src="../src/assets/imagen_Login.jpg" alt="" className=' w-full h-full'/>
        </div>
      </div>
      
    </div>
  )
}

export default Login
