import React from 'react';
import './pokemons.css';
import ProfilePokemon from './ProfilePokemon'

export default class Pokemons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchPokemons()
  }
  handleClick(){
    new ProfilePokemon()
    console.log("test")
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

            <div Key={pokemon.ndex} class="card" onClick={this.handleClick}>
             
                {/* <img class="img-pokemon fire-color" */}
                <img class={`img-pokemon ${pokemon.type1}-color`}

                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
                  alt="Pokemon">
                </img>

                <div class="card-body">
                  <span class="card-id ">#{pokemon.ndex} </span>
                  <h5 class="card-title">{pokemon.nom} </h5>
                  <button class={`btn  ${pokemon.type1}-color disabled `}>{pokemon.type1}</button>

                </div>
          
            </div>
          ))
        }
      </div>
    );
  }
}


