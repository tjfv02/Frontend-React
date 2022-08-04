import axios from "axios";
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoFunciones from "./components/ListadoFunciones";
import ListadoRoles from "./components/ListadoRoles";
import ListadoUsuarios from "./components/ListadoUsuarios";
import NavBar from "./layouts/NavBar";
import PaginaPrincipal from "./layouts/PaginaPrincipal";
import Funciones from "./pages/Funciones"
import Roles from "./pages/Roles";
import Usuarios from "./pages/Usuarios"

const App = () => {

  // -------------------- Usuarios --------------------
  const [usuarios, setUsuarios] = useState([]); //Todos los usuarios
  const [usuario, setUsuario] = useState({}); //? Un Usuario

  useEffect(() => {
    listarUsuarios()
  }, [usuarios])
  
  
  //API GET
  const listarUsuarios = async() => {
    const response = await axios.get('http://localhost:4000/users');
    setUsuarios(response.data);
  }

// -------------------- Roles --------------------
  const [roles, setRoles] = useState([]); //Todos los roles
  const [rol, setRol] = useState({}); //? un Rol
  
  useEffect(() => {
    listarRoles()
  }, [roles])
  
  
  //API GET
  const listarRoles = async() => {
    const response = await axios.get('http://localhost:4000/roles');
    setRoles(response.data);
  }

  // -------------------- Funciones --------------------
  const [funciones, setFunciones] = useState([]); //Todos las funciones
  const [funcion, setFuncion] = useState({})

  useEffect(() => {
    listarFunciones()
  }, [funciones])
  
  
  //API GET
  const listarFunciones = async() => {
    const response = await axios.get('http://localhost:4000/functions');
    setFunciones(response.data);
    
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>

          <Route index element={<PaginaPrincipal/>} />

          <Route path="/users" element={
            <div className="mt-12 md:flex">
              
              <Usuarios 
                usuarios={usuarios}
                setUsuarios={setUsuarios}
                usuario={usuario}
                setUsuario={setUsuario}
              />
              <ListadoUsuarios 
                usuarios={usuarios}
                setUsuario={setUsuario}
              />

            </div>
          
          } 
          />

          <Route path="/roles" element={
            <div className="mt-12 md:flex">
              <Roles 
                roles={roles}
                setRoles={setRoles}
                rol = {rol}
                setRol = {setRol}
              />
              <ListadoRoles 
                roles={roles}
                setRol={setRol}
              />

            </div>

          } />

          <Route path="/functions" element={
           <div className="mt-12 md:flex">
           <Funciones  
             funciones={funciones}
             setFunciones={setFunciones}
             funcion = {funcion}
             setFuncion = {setFuncion}
           />
           <ListadoFunciones 
             funciones={funciones}
             setFuncion = {setFuncion}
           />

         </div>
          } />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
