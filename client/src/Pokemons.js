import React from 'react';
import './pokemons.css';
import Layout from './Layout'
import ProfilePokemon from './ProfilePokemon'

export default class Pokemons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      isClick: false,
      ndex: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchPokemons()
  }

  handleClick(id, e) {
    e.preventDefault();
    this.setState({
      isClick: true,
      ndex: id
    });
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

    const { pokemons, ndex } = this.state


    if (this.state.isClick === true) {
      return <ProfilePokemon ndex={ndex} />
    }

    return (
      <div>
        <Layout />

        <div class='content'>
          {
            pokemons.map(pokemon => (
              <div Key={pokemon.ndex} class="card" onClick={(e) => this.handleClick(pokemon.ndex, e)} >

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
      </div>
    );
  }
}


