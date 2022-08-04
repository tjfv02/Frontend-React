const Mensaje = ({children}) => {
    return (
      <div className="text-white text-center p-3 bg-green-500 uppercase font-bold rounded-md mb-3">
          <p>{ children }</p>
      </div>
    )
  }
  
  export default Mensaje
  