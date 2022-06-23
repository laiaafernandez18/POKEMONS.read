import Carta from "./componente/Carta";
import "./app.css";
import { Fragment } from "react";
function App() {
  return (
  
      <div className="container">
        <header className="header">
          <div className="header-bg"></div>
          <img
            className="header-logo"
            src=""
            alt="pokemon-logo"
         ></img> 
          <nav class="header-search_bar">
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">GO</button>
          </nav>
        </header>
       
        <main className="list-pokemons">
        <pikachu url="https://phantom-marca.unidadeditorial.es/aecba2dba5729e9710793993268c0c70/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/01/16540980600307.jpg" name="Carol"/>
        <Carta/>
        <Carta/>
        <Carta/>
        <Carta/>
          
        </main>
      </div>
  
  );
}

export default App;

