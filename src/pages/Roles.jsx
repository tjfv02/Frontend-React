import { useState, useEffect } from "react"
import { crearRol, editarRol } from "../services/rolServices";

const Roles = ({roles, setRoles, rol, setRol}) => {
  //Datos Formulario
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (Object.keys(roles).length > 0) {
      setName(rol.name);
      setDescription(rol.description);
      setStatus(rol.status);
    }
  },[rol])

  const handleSubmit = async (e) => {
    const objetoRol = {
      name : name,
      description : description,
      status : status
    }

    if (rol.idRol) {

      editarRol(rol.idRol, objetoRol);
      setRol({});
      
    }else{

      crearRol(objetoRol);

    }
    //Limpiar formulario
    setName('');
    setDescription('');
    setStatus('');
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mt-10">
     <h2 className="font-black text-3xl text-center">
       Roles
     </h2>

     <p className="text-lg mt-5 text-center mb-10">

       <span className="text-blue-600 font-bold ">
       {rol.idRol ? "Edita " : "Crea "}
       </span>

       {' '}Roles

     </p>

     <form 
       onSubmit={handleSubmit}
       className="bg-while shadow-md rounded-lg py-10 px-5"
     >
       <div className="mb-5">
         <label htmlFor="name" className="block text-gray-700 uppercase font-bold">
           Nombre del Roles
         </label>
         <input 
           id="name"
           type="text" 
           placeholder="Nombre del Rol"
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
         value = {rol.idRol ? "Editar Rol" : "Agregar Rol"}
       />
     </form>
   </div>
  )
}

export default Roles
