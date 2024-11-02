import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function DetalhesArtista() {

    const {id} = useParams()

    const [artistas, setArtistas] = useState({});
  
    useEffect(() => {
      fetch(`http://localhost:3000/artistas/${id}`)
        .then(res => res.json())
        .then(data => setArtistas(data))
        .catch(err => console.log(err))
        .finally(() => console.log('Finalizou a requisição'))
    }, [])

    return (
        <div className="w-3/4">
            <div className="m-10">
                <h1 className="text-4xl text-white font-bold mb-10">{artistas.name}</h1>
                <img className="w-64 rounded-lg mb-10 " src={artistas.img} />
                <p className="text-xl text-white">{artistas.bio}</p>
            </div>
        </div>
    )
}