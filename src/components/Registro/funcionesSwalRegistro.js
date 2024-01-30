export const alertOk=()=>{
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
    })
}

export const alertError=()=>{
    Swal.fire({
        title: "Error al crear Usuario!",
        text: `El correo ya esta registrado`,
        icon: "error"
    })
}