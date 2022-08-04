import { useEffect, useState } from "react";
import {  crearUsuario, editarUsuario } from "../services/userServices";

const SignUp = ({usuarios, usuario, setUsuario}) => {
   //Datos Formulario
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [fistName, setFistName] = useState('');
   const [lastname, setLastname] = useState('');
   const [status, setStatus] = useState('');

  useEffect(() =>{
      if (Object.keys(usuarios).length > 0) {
        setUsername(usuario.username);
        setPassword(usuario.password);
        setFistName(usuario.fistName);
        setLastname(usuario.lastName);
        setStatus(usuario.status);
      }

  }, [usuario])

   //Crear Usuario
   const handleSubmit = async (e) => {
      e.preventDefault();

      //Crear Usuario  
      const objetoUsuario = {
        username: username,
        password : password,
        fistName : fistName,
        lastName : lastname,
        status : status
      }

        editarUsuario(usuario.idUser, objetoUsuario);
        setUsuario({});
      

      //Limpieza de formulario
      setUsername('');
      setPassword('');
      setFistName('');
      setLastname('');
      setStatus('');
   }
       

 return (
   <div className="md:w-1/2 lg:w-2/4 mt-10 p-3">
     <h2 className="font-black text-3xl text-center">
       Registrate!
     </h2>

     <p className="text-lg mt-5 text-center mb-10">

       <span className="text-blue-600 font-bold ">
       Crea 
       </span>

       {' '}tu Usuario

     </p>

     <form 
       onSubmit={handleSubmit}
       className="bg-while shadow-md rounded-lg py-10 px-5"
     >
       <div className="mb-5">
         <label htmlFor="username" className="block text-gray-700 uppercase font-bold">
           Nombre de Usuario
         </label>
         <input 
           id="username"
           type="text" 
           placeholder="Nombre de Usuario"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
           value = {username}
           onChange = { (e) => setUsername(e.target.value) }
         />
       </div>

       <div className="mb-5">
         <label htmlFor="password" className="block text-gray-700 uppercase font-bold">
           Contraseña
         </label>
         <input 
           id="password"
           type="password" 
           placeholder="******"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
           value = {password}
           onChange = { (e) => setPassword(e.target.value) }
         />
       </div>

       <div className="mb-5">
         <label htmlFor="firstname" className="block text-gray-700 uppercase font-bold">
           Nombre
         </label>
         <input 
           id="firstname"
           type="text" 
           placeholder="Nombre"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
           value = {fistName}
           onChange = { (e) => setFistName(e.target.value) }
         />
       </div>

       <div className="mb-5">
         <label htmlFor="lastname" className="block text-gray-700 uppercase font-bold">
           Apellido
         </label>
         <input 
           id="lastname"
           type="text" 
           placeholder="Apellido"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
           value = {lastname}
           onChange = { (e) => setLastname(e.target.value) }
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
         value = {"Agregar Usuario"}
       />
     </form>
   </div>
 )
}

export default SignUp
