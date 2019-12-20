import React from 'react';
import './App.css';
import Pokemons from './Pokemons'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (

    <div>
      <div class = "header">
        <h1>POKEDEX</h1>
        <img class="fit-picture"
          src="https://www.ladn.eu/wp-content/uploads/2018/06/pokemon.jpg"
          alt="Pokemon">
        </img>
      </div>
      <Pokemons />
    </div>
  );
}

export default App;
