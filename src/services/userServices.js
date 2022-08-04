import axios from "axios";
const url = 'http://localhost:4000/users'

//Consultas API

// GET: users
const obtenerUsuarios = async() => {
    try {
        const resp = await axios.get(url);
        console.log('USUARIOS OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
  }

// POST: user
const crearUsuario = async(objetoUsuario) => {
    try {
        await axios.post(url,objetoUsuario);
        console.log('USUARIO CREADO');

      } catch (error) {
        console.log(error.response);
      }
}

// DELETE: user
const eliminarUsuario = async (idUser) => {
    try {
        await axios.delete(`${url}/${idUser}`);
        console.log('USUARIO ELIMINADO');
    } catch (error) {
        console.log(error.response);
    }
}

//PUT: user
const editarUsuario = async (idUser, usuarioActualizado) => {
    try {
        await axios.put(`${url}/${idUser}`,usuarioActualizado);
        console.log('USUARIO EDITADO');
        
    } catch (error) {
        console.log(error.response);
    }
  }

 export { obtenerUsuarios, crearUsuario, eliminarUsuario, editarUsuario }