import Swal from 'sweetalert2';

export const alertOk=(correo,contrasenia)=>{
    Swal.fire({
        title: "Inicio de Sesion Correcta!",
        text: `Usuario : ${correo}, contrasenia ${contrasenia}`,
        icon: "success"
    })
}
export const alertNo=()=>{
    Swal.fire({
        title:"Datos Incorrectos!",
        text: "Usuario o contraseña incorrectos",
        icon: "error"
    })
}
export const alertError=()=>{
    Swal.fire({
        title:"Error al iniciar Sescion",
        text: "Error de servidor",
        icon:"warning"
    })
}