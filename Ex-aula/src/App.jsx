import Header from "./assets/components/Header"
import Meio from "./assets/components/Meio"
import Footer from "./assets/components/Footer"
import Azul from "./assets/components/Azul"
import Laranja from "./assets/components/Laranja"
import Amarelo from "./assets/components/Amarelo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
function App() {

  return (
    <main>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Meio/>}/>
            <Route path="Instrumentos" element={<Azul/>}/>
            <Route path="Endereco" element={<Amarelo/>}/>
            <Route path="Contato" element={<Laranja/>}/>
            <Route path="Quem somos" element={<Meio/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </main>
  )
}

export default App
