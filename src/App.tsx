import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { useState } from "react" 
import Footer from "./components/footer/Footer"


function App() {
  
  const [nomeUsuario, setNomeUsuario] = useState("Comunidade!");

  return (
    <>
      <BrowserRouter>
         <Navbar /> 
        <div className="min-h-[80vh]">
          
          <div className="flex justify-center py-2 bg-indigo-100">
             <button 
                onClick={() => setNomeUsuario("Márcia Telles")}
                className="bg-indigo-600 text-white px-4 py-1 rounded"
             >
                Entrar como Márcia Telles
             </button>
          </div>

          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  titulo={`Bem-vinde, ${nomeUsuario}!`} 
                  texto="Compartilhe e expresse aqui seus pensamentos e opiniões!!" 
                />
              } 
            />
            <Route 
              path="/home" 
              element={
                <Home 
                  titulo={`Bem-vinde, ${nomeUsuario}!`} 
                  texto="Compartilhe e expresse aqui seus pensamentos e opiniões!!" 
                />
              } 
            />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App;