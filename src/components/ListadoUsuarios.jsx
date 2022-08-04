import Usuario from "./Usuario"

const ListadoUsuarios = ({usuarios, setUsuario}) => {
    return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {usuarios && usuarios.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Usuarios
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus {''}
            <span className="text-blue-600 font-bold"> Usuarios</span>
          </p>

          {/* Iterar */}
          {usuarios.map (
            usuario => {

            return(
              <Usuario 
                key={usuario.idUser}
                usuario={usuario}
                setUsuario = {setUsuario}
              />
            )
          })}
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Usuarios
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega {''}
            <span className="text-blue-600 font-bold"> Usuarios</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoUsuarios
