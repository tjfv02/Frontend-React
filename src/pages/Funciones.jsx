import { useState, useEffect } from "react"
import { crearFuncion, editarFuncion } from "../services/functionService";

const Roles = ({funciones, setFunciones, funcion, setFuncion}) => {
  //Datos Formulario
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (Object.keys(funciones).length > 0) {
      setName(funcion.name);
      setDescription(funcion.description);
      setStatus(funcion.status);
    }
  },[funcion])

  const handleSubmit = async (e) => {
    const objetoFuncion = {
      name : name,
      description : description,
      status : status
    }

    if (funcion.idFunction ) {

      editarFuncion(funcion.idFunction, objetoFuncion);
      setFuncion({});
      
    }else{

      crearFuncion(objetoFuncion);

    }
    //Limpiar formulario
    setName('');
    setDescription('');
    setStatus('');
  }
  //Crear Roles
  return (
    <div className="md:w-1/2 lg:w-2/5 mt-10">
     <h2 className="font-black text-3xl text-center">
       Funciones
     </h2>

     <p className="text-lg mt-5 text-center mb-10">

       <span className="text-blue-600 font-bold ">
       {funcion.idFunction ? "Edita " : "Crea "}
       </span>

       {' '}Funciones

     </p>

     <form 
       onSubmit={handleSubmit}
       className="bg-while shadow-md rounded-lg py-10 px-5"
     >
       <div className="mb-5">
         <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
           Nombre de la Función
         </label>
         <input 
           id="name"
           type="text" 
           placeholder="Nombre de la Función"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
           value = {name}
           onChange = { (e) => setName(e.target.value) }
         />
       </div>

       <div className="mb-5">
         <label htmlFor="description" className="block text-gray-700 uppercase font-bold">
           Descripción
         </label>
         <input 
           id="description"
           type="text" 
           placeholder="Descripción"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
           value = {description}
           onChange = { (e) => setDescription(e.target.value) }
         />
       </div>
     
       <div className="mb-5">
         <label htmlFor="status" className="block text-gray-700 uppercase font-bold">
           Estado
         </label>
         <input 
           id="status"
           type="text" 
           placeholder="1 → Activo | 0 → Inactivo"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
           value = {status}
           onChange = { (e) => setStatus(e.target.value) }
         />
       </div>

       <input
         type = "submit"
         className = "bg-blue-600 w-full text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors p-3 rounded"
         value = {funcion.idFunction ? "Editar Función" : "Agregar Función"}
       />
     </form>
   </div>
  )
}

export default Roles
