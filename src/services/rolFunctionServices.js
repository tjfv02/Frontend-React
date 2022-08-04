import axios from "axios";
const url = 'http://localhost:4000/rol_function'

//Consultas API

// GET: users
const obtenerRolesFunciones = async() => {
    try {
        const resp = await axios.get(url);
        console.log('ROL-FUNCION OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
  }

// POST: user
const crearRolFuncion = async(objetoRolFuncion) => {
    try {
        await axios.post(url,objetoRolFuncion);
        console.log('ROL-FUNCION CREADO');

      } catch (error) {
        console.log(error.response);
      }
}

// DELETE: user
const eliminarRolFuncion = async (idRolFunction) => {
    try {
        await axios.delete(`${url}/${idRolFunction}`);
        console.log('ROL-FUNCION ELIMINADO');
    } catch (error) {
        console.log(error.response);
    }
}

//PUT: user
const editarRolFuncion = async (idRolFunction, rolFunctionActualizado) => {
    try {
        await axios.put(`${url}/${idRolFunction}`,rolFunctionActualizado);
        console.log('ROL-FUNCION EDITADO');
        
    } catch (error) {
        console.log(error.response);
    }
  }

 export { obtenerRolesFunciones, crearRolFuncion  , eliminarRolFuncion  , editarRolFuncion   }