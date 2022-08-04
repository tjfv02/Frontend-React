import axios from "axios";
const url = 'http://localhost:4000/user_rol'

//Consultas API

// GET: users
const obtenerUsuarioRol = async() => {
    try {
        const resp = await axios.get(url);
        console.log('USURIO-ROL OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
  }

// POST: user
const crearUsuarioRol = async(objetoUsuarioRol) => {
    try {
        await axios.post(url,objetoUsuarioRol);
        console.log('USURIO-ROL CREADO');

      } catch (error) {
        console.log(error.response);
      }
}

// DELETE: user
const eliminarUsuarioRol = async (idUserRol) => {
    try {
        await axios.delete(`${url}/${idUserRol}`);
        console.log('USURIO-ROL ELIMINADO');
    } catch (error) {
        console.log(error.response);
    }
}

//PUT: user
const editarUsuarioRol = async (idUserRol, usuarioRolActualizado) => {
    try {
        await axios.put(`${url}/${idUserRol}`,usuarioRolActualizado);
        console.log('USURIO-ROL EDITADO');
        
    } catch (error) {
        console.log(error.response);
    }
  }

 export { obtenerUsuarioRol , crearUsuarioRol , eliminarUsuarioRol , editarUsuarioRol  }