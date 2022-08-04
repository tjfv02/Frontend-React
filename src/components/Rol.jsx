import { eliminarRol } from "../services/rolServices";

const Rol = ({rol, setRol}) => {

    const {
        idRol,
        name,
        description,
        date_created,
        date_update,
        status
    } = rol;

    const handleEliminar = () => {
        const respuesta = confirm(`Deseas eliminar el rol de "${name}"`);

        if (respuesta) {
            //DELETE
            eliminarRol(rol.idRol);
        }
    }

  return (
    <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
    Id de Rol: {''}
    <span className="font-normal normal-case">{idRol}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
    Nombre del Rol: {''}
    <span className="font-normal normal-case">{name}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">
    Descripción: {''}
    <span className="font-normal normal-case">{description}</span>
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
            onClick={ () => setRol(rol) }
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

export default Rol
