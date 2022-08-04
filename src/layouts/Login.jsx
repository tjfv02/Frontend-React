import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from '../pages/Error';
import Mensaje from "../pages/Mensaje";
import { iniciarSesion } from "../services/loginService";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const Login = () => {
    //Datos Formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Validacion
    const [error, setError] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [acceso, setAcceso] = useState(false);
    
    let navigate = useNavigate();

   //Crear Usuario
   const handleSubmit = async (e) => {
      e.preventDefault();

      //Crear Usuario  
      const objetoUsuario = {
        username: username,
        password : password
      }

      console.log(objetoUsuario);

      const res = await iniciarSesion(objetoUsuario);
      const {msg, intentos, login} = res;
      console.log(msg);
      console.log(intentos);
      console.log(login);

      if (login === "false") {
        setError(true);
        setAcceso(false);
        console.log(login);
        setMensaje(msg);
        return
      }

      if (login === "true") {
        setAcceso(true);
        setError(false);
        console.log(login);
        setMensaje(msg);
        return
      }

          
      
      
      
      //Limpieza de formulario
      setUsername('');
      setPassword('');


    }

    
       

 return (
   <div className="md:w-1/2 lg:w-2/4 mt-10">
     <h2 className="font-black text-3xl text-center">
       Login
     </h2>

     <p className="text-lg mt-5 text-center mb-10">

       <span className="text-blue-600 font-bold ">
        Inicia sesión 
       </span>

       {' '}con tu Usuario

     </p>

     <form 
       onSubmit={handleSubmit}
       className="bg-while shadow-md rounded-lg py-10 px-5"
     >

        {error &&  
          <Error>
            <p>{mensaje}</p>
          </Error>
        }

        {acceso &&  
          <Mensaje>
            <p>{mensaje}</p>
          </Mensaje>
        }   

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

       <input
         type = "submit"
         className = "bg-blue-600 w-full text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors p-3 rounded"
         value = {"Iniciar Sesión"}
       />
     </form>
   </div>
 )
}

export default Login
