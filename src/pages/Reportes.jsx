import axios from "axios";
import { useState } from "react"
import { obtenerUsuarioRol, obtenerFuncionesRol } from "../services/reportsService";

const Reportes = ({roles, usuarios}) => {
  //Nombre del Usuario con un Rol
  const [idRol, setIdRol] = useState('');
  const [idRol2, setIdRol2] = useState('');
  const [idUser, setIdUser] = useState('');

  const handleSubmit1 =  async (e) => {
    
    try {
      const resp = await axios.get(`http://localhost:4000/reports/user_rol/${idRol}`);
      console.log('USUARIO ROL OBTENIDO');
      console.log(resp.data); 

  } catch (error) {
      console.log(error.response);
  }
    setIdRol('');
  }

  const handleSubmit2 = async (e) => {
    const roles = await obtenerFuncionesRol(idRol);
    console.log(roles);
    setIdRol('');
  }

  const handleSubmit3 = async (e) => {}

  return (
    <div className="h-screen overflow-y-scroll">
      <>
        <h2 className="font-black text-3xl text-center">
            Reportes
        </h2>

        {/* Primer Reporte */}
        <div className="m-5 my-10  shadow-md px-5 py-10 rounded-xl bg-blue-100">
            <p className="text-xl mt-5 mb-10 text-center">
                Usuarios con un {''}
                <span className="text-blue-600 font-bold"> Rol Específico</span>
            </p>

            <div className="mt-12 md:flex">
              {/* Formulario */}
              <div className="md:w-1/2 lg:w-2/5 mt-10">
                <form 
                  onSubmit={handleSubmit1}
                  className="bg-while shadow-md rounded-lg py-10 px-5"
                >
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
                    value = {"Buscar"}
                  />
                  
                </form>

              </div>
              {/* Consulta */}
              <div className="md:w-1/2 lg:w-3/5  overflow-y-scroll">
                <h2 className="font-black text-3xl text-center">
                  Usuarios
                </h2>

              </div>

            </div>
        </div>

        {/* Segundo Reporte */}
        <div className="m-5 my-10  shadow-md px-5 py-10 rounded-xl bg-blue-100">
          <p className="text-xl mt-5 mb-10 text-center">
          Funciones de un  {''}
            <span className="text-blue-600 font-bold"> Rol </span>
          </p>

          <div className="mt-12 md:flex">

            {/* Formulario */}
            <div className="md:w-1/2 lg:w-2/5 mt-10">
                <form 
                  onSubmit={handleSubmit2}
                  className="bg-while shadow-md rounded-lg py-10 px-5"
                >
                  <label htmlFor="idRol2" className="mt-10 block text-gray-700 uppercase font-bold">
                      Rol
                  </label>
                  <select id="idRol2" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                      value = {idRol2}
                      onChange = { (e) => setIdRol2(e.target.value) }
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
                    value = {"Buscar"}
                  />
                  
                </form>

              </div>
              {/* Consulta */}
              <div className="md:w-1/2 lg:w-3/5  overflow-y-scroll">
                <h2 className="font-black text-3xl text-center">
                  Funciones
                </h2>

              </div>

          </div>

          {/* Tercer Reporte */}
          <div className="m-5 my-10  shadow-md px-5 py-10 rounded-xl bg-blue-100">
            <p className="text-xl mt-5 mb-10 text-center">
              Funciones y Roles asignados a un {''}
              <span className="text-blue-600 font-bold"> Usuario </span>
            </p>

            <div className="mt-12 md:flex">

              {/* Formulario */}
              <div className="md:w-1/2 lg:w-2/5 mt-10">
                <form 
                  onSubmit={handleSubmit3}
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
                  <input
                    type = "submit"
                    className = "bg-blue-600 w-full text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors p-3 rounded mt-10"
                    value = {"Buscar"}
                  />
                  
                </form>

              </div>
              {/* Consulta */}
              <div className="md:w-1/2 lg:w-3/5  overflow-y-scroll">
                <h2 className="font-black text-3xl text-center">
                  Funciones y Roles
                </h2>
              </div>
          </div>

        </div>
        
        </div>




      </>
    </div>
  )
}

export default Reportes
