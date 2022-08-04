import { useEffect, useState } from "react"
import { crearRolFuncion, editarRolFuncion } from "../services/rolFunctionServices";

const RolesFunciones = ({rolesFunciones, rolFuncion, setRolFuncion, funciones, roles}) => {

    //Datos Formulario
    const [idFunction, setIdFunction] = useState('');
    const [idRol, setIdRol] = useState('');

    useEffect(() => {
      if(Object.keys(rolesFunciones).length > 0){
        setIdFunction(rolFuncion.idUser);
        setIdRol(rolFuncion.idRol);
      }
    }, [rolFuncion])
    
    const handleSubmit = async (e) => {
        const objetoRolFuncion = {
            idUser : idFunction,
            idRol : idRol
        }

        if (rolFuncion.idRolFunction) {
            editarRolFuncion(rolFuncion.idRolFunction, objetoRolFuncion);
            setRolFuncion({});
        }else{
            crearRolFuncion(objetoRolFuncion);
        }
        //Limpiar Formulario
        setIdFunction('');
        setIdRol('');
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mt-10">
     <h2 className="font-black text-3xl text-center">
       Asignación de Funciones a un Rol
     </h2>

     <p className="text-lg mt-5 text-center mb-10">

       <span className="text-blue-600 font-bold ">
       {rolFuncion.idRolFunction ? "Edita " : "Crea "}
       </span>

       {' '} una asignación de Función a un Rol

     </p>

     <form 
       onSubmit={handleSubmit}
       className="bg-while shadow-md rounded-lg py-10 px-5"
     >

        <label htmlFor="idRol" className="mt-10 block text-gray-700 uppercase font-bold">
            Rol
        </label>
        <select id="idRol" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value = {idRol}
            onChange = { (e) => setIdRol(e.target.value) }
        >
            {roles.map(
                rol => {
                    return (
                        <option value={rol.idRol}>{rol.name}</option>
                    )
                }
            )}
            
        </select>

        <label htmlFor="idFunction" className="block text-gray-700 uppercase font-bold">
            Función
        </label>
        <select id="idFunction" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value = {idFunction}
            onChange = { (e) => setIdFunction(e.target.value) }
        >
            {funciones.map(
                funcion => {
                    return (
                        <option value={funcion.idFunction}>{funcion.name}</option>
                    )
                }
            )}
            
        </select>


       <input
         type = "submit"
         className = "bg-blue-600 w-full text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors p-3 rounded mt-10"
         value = {rolFuncion.idRolFunction ? "Editar Asignación" : "Agregar Asignación"}
       />
     </form>
   </div>
  )
}

export default RolesFunciones
