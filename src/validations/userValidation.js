import * as yup from "yup";


export const validationSchema = yup.object().shape({
    name: yup.string().required('El nombre es requerido'),
    email: yup.string().email('Ingresa un email válido').required('El email es requerido'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
  });