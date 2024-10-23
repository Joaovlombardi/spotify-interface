import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function ConteudoPrincial() {

  const [artistas, setArtistas] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => console.log('Finalizou a requisição'))
  }, [])

    return ( 
        <div className="bg-gray-400 w-3/4 grid grid-cols-3 place-items-center items-center">

          <h1 className="">Rap</h1>
          {artistas
            .filter( artista => artista.genero.
            includes("Rap"))
            .map( artista => (
              <Link to={`/artista/${artista._id}`}>
                <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                  <p>{artista.name}</p>
                  <p>{artista.genero}</p>
                  <div className="bg-green-400 w-3/4 h-7"></div>
                </div>
              </Link>
            ))}
            
        </div>
     );
}
