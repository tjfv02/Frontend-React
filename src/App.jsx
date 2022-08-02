import { useState } from "react"
import Funciones from "./components/Funciones"
import Roles from "./components/Roles";
import Usuarios from "./components/Usuarios"

const App = () => {
  const [usuarios, setUsuarios] = useState([]); //Todos los usuarios
  const [roles, setRoles] = useState([]); //Todos los roles
  const [funciones, setFunciones] = useState([]); //Todos las funciones

  return (
    <>
      {/* <Usuarios 
        usuarios={usuarios}
        setUsuarios={setUsuarios}
      /> */}
      <Funciones 
        usuarios={usuarios}
        setUsuarios={setUsuarios}
      />
      {/* <Roles 
        roles={roles}
        setRoles={setRoles}
      /> */}
    </>
  )
}

export default App
