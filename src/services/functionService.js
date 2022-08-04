import axios from "axios";
const url = 'http://localhost:4000/functions'

//Consultas API

// GET: users
const obtenerFunciones = async() => {
    try {
        const resp = await axios.get(url);
        console.log('FUNCIONES OBTENIDOS');
        return resp.data;

    } catch (error) {
        console.log(error.response);
    }
  }

// POST: user
const crearFuncion = async(objetoFuncion) => {
    try {
        await axios.post(url,objetoFuncion);
        console.log('FUNCION CREADA');

      } catch (error) {
        console.log(error.response);
      }
}

// DELETE: user
const eliminarFuncion = async (idFunction) => {
    try {
        await axios.delete(`${url}/${idFunction}`);
        console.log('FUNCION ELIMINADA');
    } catch (error) {
        console.log(error.response);
    }
}

//PUT: user
const editarFuncion = async (idFunction, funcionActualizada) => {
    try {
        await axios.put(`${url}/${idFunction}`,funcionActualizada);
        console.log('FUNCION EDITADA');
        
    } catch (error) {
        console.log(error.response);
    }
  }

 export { obtenerFunciones, crearFuncion, eliminarFuncion, editarFuncion }