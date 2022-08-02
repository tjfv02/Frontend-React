import { useState, useEffect } from 'react';

const Funciones = (funciones, setFunciones) => {

    //Datos Formulario
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
        

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Funciones
      </h2>

      <p className="text-lg mt-5 text-center mb-10">

        <span className="text-indigo-600 font-bold ">
          Crear 
        </span>

        {' '}Funciones

      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-while shadow-md rounded-lg py-10 px-5"
      >
        <div className="mb-5">
          <label htmlFor="username" className="block text-gray-700 uppercase font-bold">
            Nombre de Usuario
          </label>
          <input 
            id="username"
            type="text" 
            placeholder="Nombre de Usuario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value = {username}
            onChange = { (e) => setUsername(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="firstname" className="block text-gray-700 uppercase font-bold">
            Nombre
          </label>
          <input 
            id="firstname"
            type="text" 
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value = {firstname}
            onChange = { (e) => setFirstname(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="lastname" className="block text-gray-700 uppercase font-bold">
            Apellido
          </label>
          <input 
            id="lastname"
            type="text" 
            placeholder="Apellido"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value = {lastname}
            onChange = { (e) => setLastname(e.target.value) }
          />
        </div>

        

        <input
          type = "submit"
          className = "bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors p-3 rounded"
          value = {'Crear Usuario '}
        />
        

      </form>
    </div>
  )
}

export default Funciones
