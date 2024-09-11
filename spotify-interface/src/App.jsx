import Cardsidebar from "./components/Cardsidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <Header/>    
      <Container> 

        <Sidebar>
          <Cardsidebar/>
          <Cardsidebar/>
          <Cardsidebar/>
        </Sidebar>
        
        <ConteudoPrincipal/>
      </Container>
    </>
  )
}

export default App