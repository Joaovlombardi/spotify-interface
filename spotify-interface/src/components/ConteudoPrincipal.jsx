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
      <div className="bg-bg w-3/4 place-items-center flex-row">

      <div>
        <h1 className="mt-10 ml-20 text-2xl text-white font-bold">Rap</h1>

          <div className="flex flex-row justify-around">
            {artistas
              .filter(artista => artista.genero.includes("Rap"))
              .map(artista => (
                <Link to={`/artista/${artista._id}`} key={artista._id}>
                  <div className="w-40 h-40 rounded-lg flex flex-col justify-center items-center mt-8 relative"
                    style={{ backgroundImage: `url(${artista.img})`, backgroundSize: 'cover'}}>
                    <p className="text-xl text-white font-semibold absolute bottom-5">{artista.name}</p>
                  </div>
                </Link>
              ))}
          </div>
      </div>

      <div>
        <h1 className="mt-10 ml-20 text-2xl text-white font-bold">Pop</h1>
        
          <div className="flex flex-row justify-around">
            {artistas
              .filter(artista => artista.genero.includes("Pop"))
              .map(artista => (
                <Link to={`/artista/${artista._id}`} key={artista._id}>
                  <div className="w-40 h-40 rounded-lg flex flex-col justify-center items-center mt-8 relative"
                    style={{ backgroundImage: `url(${artista.img})`, backgroundSize: 'cover'}}>
                    <p className="text-xl text-white font-semibold absolute bottom-5">{artista.name}</p>
                  </div>
                </Link>
              ))}
          </div>
      </div>

      <div>
        <h1 className="mt-10 ml-20 text-2xl  text-white font-bold">Funk</h1>
        
          <div className="flex flex-row justify-around">
            {artistas
              .filter(artista => artista.genero.includes("Funk"))
              .map(artista => (
                <Link to={`/artista/${artista._id}`} key={artista._id}>
                  <div className= "w-40 h-40 rounded-lg flex flex-col justify-center items-center mt-8 relative"
                    style={{ backgroundImage: `url(${artista.img})`, backgroundSize: 'cover'}}>
                    <p className="text-xl text-white font-semibold absolute bottom-5">{artista.name}</p>
                  </div>
                </Link>
              ))}
          </div>
      </div>

      </div>

      
      
     );
}
