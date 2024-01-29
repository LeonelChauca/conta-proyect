import * as Yup from 'yup'
import parse from "date-fns/parse";

export const validacionRegistro = Yup.object({
    ci: Yup.number("El campo de tener solo numeros").required("obligatorio"),
    nombres:Yup.string().required("El campo es obligatorio"),
    apPaterno: Yup.string().required("El campo es obligatorio"),
    apMaterno: Yup.string().required("El campo es obligatorio"),
    fecha_nac: Yup.date("La Fecha no es correcta").transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd/MM/yyyy", new Date());
        return result;
      })
      .typeError("Ingresa una Fecha correcta")
      .required("El campo es obligatorio"),
    genero: Yup.string().oneOf(['Masculino','Femenino'],"Elija una de las opciones").required("El campo es obligatorio"),
    correo: Yup.string().email("El campo debe ser un correo valido").required("El campo es obligatorio"),
    telefono: Yup.number("El campo de tener solo numeros").required("El campo es obligatorio"),
    contrasenia: Yup.string().required("El campo es obligatorio"),
})