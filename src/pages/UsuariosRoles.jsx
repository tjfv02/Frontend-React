import { useEffect, useState } from "react"
import { crearUsuarioRol, editarUsuarioRol } from "../services/userRolService";

const UsuariosRoles = ({usuariosRoles, usuarioRol, setUsuarioRol, usuarios, roles}) => {
    //Datos Formulario
    const [idUser, setIdUser] = useState('');
    const [idRol, setIdRol] = useState('');

    useEffect(() => {
      if(Object.keys(usuariosRoles).length > 0){
        setIdUser(usuarioRol.idUser);
        setIdRol(usuarioRol.idRol);
      }
    }, [usuarioRol])
    
    const handleSubmit = async (e) => {
        const objetoUsuarioRol = {
            idUser : idUser,
            idRol : idRol
        }

        if (usuarioRol.idUserRol) {
            editarUsuarioRol(usuarioRol.idUserRol, objetoUsuarioRol);
            setUsuarioRol({});
        }else{
            crearUsuarioRol(objetoUsuarioRol);
        }
        //Limpiar Formulario
        setIdUser('');
        setIdRol('');
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mt-10">
     <h2 className="font-black text-3xl text-center">
       Asignación de Roles a un Usuario
     </h2>

     <p className="text-lg mt-5 text-center mb-10">

       <span className="text-blue-600 font-bold ">
       {usuarioRol.idUserRol ? "Edita " : "Crea "}
       </span>

       {' '} una asignación de Rol a un Usuario

     </p>

     <form 
       onSubmit={handleSubmit}
       className="bg-while shadow-md rounded-lg py-10 px-5"
     >
       
        <label htmlFor="idUser" className="block text-gray-700 uppercase font-bold">
            Usuario
        </label>
        <select id="idUser" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value = {idUser}
            onChange = { (e) => setIdUser(e.target.value) }
        >
            {usuarios.map(
                usuario => {
                    return (
                        <option value={usuario.idUser}>{usuario.username}</option>
                    )
                }
            )}
            
        </select>

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


       <input
         type = "submit"
         className = "bg-blue-600 w-full text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors p-3 rounded mt-10"
         value = {usuarioRol.idUserRol ? "Editar Asignación" : "Agregar Asignación"}
       />
     </form>
   </div>
  )
}

export default UsuariosRoles
