import axios from "axios";
const url = 'http://localhost:4000/roles'

//Consultas API

// GET: users
const obtenerRoles = async() => {
    try {
        const resp = await axios.get(url);
        console.log('ROLES OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
  }

// POST: user
const crearRol = async(objetoRol) => {
    try {
        await axios.post(url,objetoRol);
        console.log('ROL CREADO');

      } catch (error) {
        console.log(error.response);
      }
}

// DELETE: user
const eliminarRol = async (idRol) => {
    try {
        await axios.delete(`${url}/${idRol}`);
        console.log('ROL ELIMINADO');
    } catch (error) {
        console.log(error.response);
    }
}

//PUT: user
const editarRol = async (idRol, rolActualizado) => {
    try {
        await axios.put(`${url}/${idRol}`,rolActualizado);
        console.log('USUARIO EDITADO');
        
    } catch (error) {
        console.log(error.response);
    }
  }

 export { obtenerRoles, crearRol, eliminarRol, editarRol }