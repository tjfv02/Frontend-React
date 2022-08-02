const Error = ({children}) => {
    return (
      <div className="text-white text-center p-3 bg-red-500 uppercase font-bold rounded-md mb-3">
          <p>{ children }</p>
      </div>
    )
  }
  
  export default Error
  