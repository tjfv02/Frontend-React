import axios from "axios";

// POST: 
const iniciarSesion = async(credenciales) => {
    try {
        const response = await axios.post('http://localhost:4000/login',credenciales);
        console.log(response.data);
        return response.data

      } catch (error) {
        console.log(error.response);
      }
  }

export { iniciarSesion };