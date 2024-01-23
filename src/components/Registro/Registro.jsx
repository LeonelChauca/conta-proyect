import React from 'react'
import { FormularioRegistro } from './FormularioRegistro'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const Registro = () => {
  return (
    <div className=' bg-main3 h-screen w-full flex items-center'>
        <div className=' w-11/12 flex max-w-screen-xl m-auto'>
        <div className='w-11/12 h-4/6 bg-white m-auto max-lg:rounded-lg my-8 lg:w-2/3'>
              <h2 className=' text-center text-2xl font-candal py-12'>Registro</h2>
                <FormularioRegistro />
        </div>
      </div>
    </div>
  )
}
