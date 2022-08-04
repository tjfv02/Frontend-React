import axios from "axios";
import { useEffect, useState } from "react";
import { eliminarRolFuncion } from "../services/rolFunctionServices";

const RolFuncion = ({rolFuncion, setRolFuncion}) => {

    const {
        idRolFunction,
        idRol,
        idFunction,
        date_created,
        date_update,
        status
    } = rolFuncion; 

  // -------------------- Roles --------------------
  const [rol, setRol] = useState({});

  useEffect(() => {
    obtenerRol(rolFuncion.idRol)
  }, [rol])
  
  
  //API GET
  const obtenerRol = async(idRol) => {
    const response = await axios.get(`http://localhost:4000/roles/${idRol}`);
    setRol(response.data);
  }

  // -------------------- Funciones --------------------
  const [funcion, setFuncion] = useState({});

  useEffect(() => {
    obtenerFuncion(rolFuncion.idFunction)
  }, [funcion])
  
  
  //API GET
  const obtenerFuncion = async(idFunction) => {
    const response = await axios.get(`http://localhost:4000/functions/${idFunction}`);
    setFuncion(response.data);
  }

  const handleEliminar = () => {
    const respuesta = confirm(`Deseas eliminar esta asignación?`);

    if (respuesta) {
        //DELETE
        eliminarRolFuncion(rolFuncion.idRolFunction)
    }
}

  return (
    <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Id de Asignación: {''}
        <span className="font-normal normal-case">{idRolFunction}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Rol: {''}
        <span className="font-normal normal-case">{rol.name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre de la Función: {''}
        <span className="font-normal normal-case">{funcion.name}</span>
        </p>


        <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Creación: {''}
        <span className="font-normal normal-case">{date_created}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Actualización: {''}
        <span className="font-normal normal-case">{date_update}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Status: {''}
        <span className="font-normal normal-case">{status == 1? "Activo" : "Inactivo"}</span>
        </p>

        <div className="flex justify-center mt-10 mx-2">
            <button 
                type="button"
                className="py-2 px-10 bg-blue-600 hover:bg-teal-400 text-white font-bold uppercase rounded mx-10"
                onClick={ () => setUsuarioRol(usuarioRol) }
            >
                Editar
            </button>

            <button 
                type="button"
                className="py-2 px-10 bg-blue-600 hover:bg-pink-600 text-white font-bold uppercase rounded mx-10"
                onClick={ handleEliminar }
            >
                Eliminar
            </button>

        </div>
    
    </div>
  )
}

export default RolFuncion
