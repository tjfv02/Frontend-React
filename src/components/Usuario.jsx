import { eliminarUsuario } from "../services/userServices";

const Usuario = ({usuario, setUsuario}) => {

    const {
        idUser,
        username,
        fistName,
        lastName,
        date_created,
        date_update,
        status
    } = usuario;
    
    const handleEliminar = () => {
        const respuesta = confirm(`Deseas eliminar al usuario "${username}"`);

        if (respuesta) {
            //DELETE
            console.log(usuario.idUser);
            eliminarUsuario(usuario.idUser);
        }
    }

  return (
    <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Id de Usuario: {''}
        <span className="font-normal normal-case">{idUser}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre de Usuario: {''}
        <span className="font-normal normal-case">{username}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">{fistName}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
        Apellido: {''}
        <span className="font-normal normal-case">{lastName}</span>
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
                onClick={ () => setUsuario(usuario) }
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

export default Usuario