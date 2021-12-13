import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/estaticos/navbar/Navbar";
import Footer from "./Components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastrousuario/CadastroUsuario";
import "./App.css";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import ListaPostagem from "./Components/postagens/listapostagem/ListaPostagem";
import ListaTema from "./Components/temas/listatemas/ListaTema";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: "100vh" }}>

          <Route exact path="/ ">
            <Login />
          </Route>

          <Route path= '/login'>
            <Login />
            </Route>

          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/cadastrousuario">
            <CadastroUsuario />
          </Route>

          <Route path="/temas">
            <ListaTema />
          </Route>

          <Route path="/posts">
            <ListaPostagem />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
