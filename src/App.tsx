import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext" 
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import Perfil from "./pages/perfil/Perfil"

import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import FormularioTema from "./components/temas/formularioTema/FormularioTema"
import DeletarTema from "./components/temas/deletarTema/DeletarTema"

import ListaPostagens from "./components/postagem/listapostagem/ListaPostagem"
import FormularioPostagem from "./components/postagem/formpostagem/FormPostagem"
import DeletarPostagem from "./components/postagem/deletarpostagem/DeletarPostagem"

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar /> 
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            
            <Route 
              path="/home" 
              element={
                <Home 
                  titulo="Bem-vinde!" 
                  texto="Compartilhe e expresse aqui seus pensamentos e opiniões!!" 
                />
              } 
            />
            
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrarTema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />

            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastrarPostagem" element={<FormularioPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;