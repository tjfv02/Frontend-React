import UsuarioRol from "./UsuarioRol"

const ListadoUsuariosRoles = ({usuariosRoles, setUsuarioRol}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {usuariosRoles && usuariosRoles.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Asignación de Roles a Usuarios
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus {''}
            <span className="text-blue-600 font-bold"> Asignaciones</span>
          </p>

          {/* Iterar */}
          {usuariosRoles.map (
            usuarioRol => {

            return(
              <UsuarioRol 
                key={usuarioRol.idUserRol}
                usuarioRol={usuarioRol}
                setUsuarioRol={setUsuarioRol}
              />
            )
          })}
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Asignaciones
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega {''}
            <span className="text-blue-600 font-bold"> Asignaciones</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoUsuariosRoles
