import Funcion from "./Funcion"

const ListadoFunciones = ({funciones, setFuncion}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {funciones && funciones.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Funciones
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus {''}
            <span className="text-blue-600 font-bold"> Funciones</span>
          </p>

          {/* Iterar */}
          {funciones.map (
            funcion => {

            return(
              <Funcion 
                key={funcion.idFunction}
                funcion={funcion}
                setFuncion={setFuncion} 
              />
            )
          })}
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Funciones
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega {''}
            <span className="text-blue-600 font-bold"> Funciones</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoFunciones
