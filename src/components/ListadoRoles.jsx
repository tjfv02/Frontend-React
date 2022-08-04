import Rol from "./Rol"

const ListadoRoles = ({roles, setRol}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {roles && roles.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Roles
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus {''}
            <span className="text-blue-600 font-bold"> Roles</span>
          </p>

          {/* Iterar */}
          {roles.map (
            rol => {

            return(
              <Rol 
                key={rol.idRol}
                rol={rol}
                setRol={setRol} 
              />
            )
          })}
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Roles
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega {''}
            <span className="text-blue-600 font-bold"> Roles</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoRoles
