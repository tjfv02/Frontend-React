import axios from "axios";



// GET: Nombre del Usuario con un Rol
const obtenerUsuarioRol = async(idRol) => {
    try {
        const resp = await axios.get(`http://localhost:4000/reports/user_rol/${idRol}`);
        console.log('USUARIO ROL OBTENIDO');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
}

  
  // GET: Funciones de un Rol
const obtenerFuncionesRol = async(idRol) => {
    try {
        const resp = await axios.get(`http://localhost:4000/reports/functions_rol/${idRol}`);
        console.log('FUNCIONES DEL ROL OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
}

  // GET: Funciones y Roles asignados a un Usuario
  const obtenerFuncionesRolesUsuario = async(idUser) => {
    try {
        const resp = await axios.get(`http://localhost:4000/reports/functions_rol_user/${idUser}`);
        console.log('FUNCIONES Y ROLES DE UN USUARIO OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
}


// GET: Funciones y Roles asignados a un Usuario
const obtenerUsuariosSinRol = async(fechaInicio, fechaFin) => {
    try {
        const resp = await axios.get(`http://localhost:4000/reports/users_no_rol`);
        console.log('USUARIO SIN ROL OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
}

export {obtenerUsuarioRol, obtenerFuncionesRol, obtenerFuncionesRolesUsuario, obtenerUsuariosSinRol}