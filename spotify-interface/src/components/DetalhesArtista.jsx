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
        <div className="m-10 w-3/4">
            <h1 className="text-4xl font-bold mb-10">{artistas.name}</h1>
            <img className="w-64 rounded-lg mb-10 " src={artistas.img} />
            <p className="text-xl">{artistas.bio}</p>
        </div>
    )
}