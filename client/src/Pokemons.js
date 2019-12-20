import React from 'react';
import './pokemon.css';

export default class Pokemons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    this.fetchPokemons()
  }

  async fetchPokemons() {

    const response = await fetch('http://localhost:4000/pokemons', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();

    this.setState({
      pokemons: data
    });
  }

  render() {
    const { pokemons } = this.state
    return (
      <div class='content'>

        {
          pokemons.map(pokemon => (

            <div Key={pokemon.ndex} class="card">

              <img class="img-pokemon fire-color"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
                alt="Pokemon">
              </img>

              <div class="card-body">
                <span class="card-id ">#{pokemon.ndex} </span>
                <h5 class="card-title">{pokemon.nom} </h5>
                <button class="btn btn-success disabled">plante</button>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}


