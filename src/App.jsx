import axios from "axios";
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoFunciones from "./components/ListadoFunciones";
import ListadoRoles from "./components/ListadoRoles";
import ListadoUsuariosRoles from "./components/ListadoUsuariosRoles";
import ListadoUsuarios from "./components/ListadoUsuarios";
import NavBar from "./layouts/NavBar";
import PaginaPrincipal from "./layouts/PaginaPrincipal";
import Funciones from "./pages/Funciones"
import Roles from "./pages/Roles";
import Usuarios from "./pages/Usuarios"
import UsuariosRoles from "./pages/UsuariosRoles";
import RolesFunciones from "./pages/RolesFunciones";
import ListadoRolesFunciones from "./components/ListadoRolesFunciones";
import Reportes from "./pages/Reportes";
import { iniciarSesion } from "./services/loginService";
import Login from "./layouts/Login";
import SignUp from "./layouts/SignUp";

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

  // -------------------- Usuarios-Roles --------------------
  const [usuariosRoles, setUsuariosRoles] = useState([])  ;
  const [usuarioRol, setUsuarioRol] = useState({});

  useEffect(() => {
    listarUsuariosRoles()
  }, [usuariosRoles])
  
  
  //API GET
  const listarUsuariosRoles = async() => {
    const response = await axios.get('http://localhost:4000/user_rol');
    setUsuariosRoles(response.data);
    
  }

  // -------------------- Roles-Funciones --------------------
  const [rolesFunciones, setRolesFunciones] = useState([])  ;
  const [rolFuncion, setRolFuncion] = useState({});

  useEffect(() => {
    listarRolesFunciones()
  }, [rolesFunciones])
  
  
  //API GET
  const listarRolesFunciones = async() => {
    const response = await axios.get('http://localhost:4000/rol_function');
    setRolesFunciones(response.data);
    
  }

  // -------------------- Login --------------------
  // const [loginUser, setLoginUser] = useState({})

  // // POST: 
  // const iniciarSesion = iniciarSesion(loginUser);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>

          <Route index element={
            <div className="mt-12 md:flex">
              <Login/>
              <SignUp 
                usuarios={usuarios}
                usuario={usuario}
                setUsuario={setUsuario}
              />
            </div>
          } />

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

          <Route path="/user_rol" element={
            <div className="mt-12 md:flex">
              <UsuariosRoles
                usuariosRoles={usuariosRoles}
                setUsuariosRoles={setUsuariosRoles}
                usuarioRol = {usuarioRol}
                setUsuarioRol = {setUsuarioRol}
                // asignaciones
                usuarios={usuarios}
                roles={roles}
              />
              <ListadoUsuariosRoles 
                usuariosRoles={usuariosRoles}
                setUsuarioRol={setUsuarioRol}
              />
            </div>
          }/>

          <Route path="/rol_function" element={
            <div className="mt-12 md:flex">
              <RolesFunciones 
                rolesFunciones={rolesFunciones}
                setRolesFunciones={setRolesFunciones}
                rolFuncion = {rolFuncion}
                setRolFuncion = {setRolFuncion}
                // asignaciones
                roles={roles}
                funciones={funciones}
              />
              <ListadoRolesFunciones 
                rolesFunciones={rolesFunciones}
                setRolFuncion={setRolFuncion}
              />
            </div>
          }/>

          <Route path="/reports" element={
            <Reportes 
              roles={roles}
              usuarios={usuarios}
            />
          } />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
