import { useEffect, useState } from "react"
import Cardsidebar from "./components/Cardsidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  const [artistas, setArtistas] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header/>    
      <Container> 

        <Sidebar>
          <Cardsidebar/>
          <Cardsidebar/>
          <Cardsidebar/>
        </Sidebar>
        
        <ConteudoPrincipal>
        {
            artistas.map( artista => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
              <p>{artista.name}</p>
              <div className="bg-green-400 w-3/4 h-7"></div>
            </div>
            ))
        }

        </ConteudoPrincipal>

      </Container>
    </>
  )
}

export default App