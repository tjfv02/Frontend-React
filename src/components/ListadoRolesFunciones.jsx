import RolFuncion from "./RolFuncion"

const ListadoRolesFunciones = ({rolesFunciones, setRolFuncion}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {rolesFunciones && rolesFunciones.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Asignación de Funciones a un Rol
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus {''}
            <span className="text-blue-600 font-bold"> Asignaciones</span>
          </p>

          {/* Iterar */}
          {rolesFunciones.map (
            rolFuncion => {

            return(
              <RolFuncion 
                key={rolFuncion.idRolFunction}
                rolFuncion={rolFuncion}
                setRolFuncion={setRolFuncion}
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

export default ListadoRolesFunciones
