import React from 'react';
import './pokemons.css';
import Layout from './Layout';


export default class Pokemons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fixePokemons: [],
      pokemons: [],
      // tabChange: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectChange = this.selectChange.bind(this);


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
      pokemons: data,
      fixePokemons: data
    });
  }

  handleChange(event) {

    let finalTab = [];
    let fixePokemons = this.state.fixePokemons;
    let targetValue = ''

    if (event.target.value !== '') {

      targetValue = event.target.value
      targetValue = targetValue[0].toUpperCase() + targetValue.slice(1);
    }

    for (const pokemon of fixePokemons) {

      if (pokemon['nom'].match(targetValue)) {
        finalTab.push(pokemon)
      }
    }
    this.setState({
      pokemons: finalTab,
    })

  }

  selectChange(event) {

    let finalTab = [];
    let fixePokemons = this.state.fixePokemons;

    if (event.target.value === 'Catégorie') {
      this.setState({
        pokemons: fixePokemons
      })
    } else {
      for (const pokemon of fixePokemons) {
        if (pokemon['type1'] === event.target.value || pokemon['type2'] === event.target.value) {
          finalTab.push(pokemon)
        }
      }
      this.setState({
        pokemons: finalTab
      })
    }




  }


  render() {

    const { pokemons } = this.state

    return (

      <div>
        <Layout />
        {/* ----------------------------- SEARCH  ---------------------------------------- */}

        {/* ----------------------------- FILTER  ---------------------------------------- */}

        <form>
          <div class="form-row align-items-center">
            <div class="col-auto col-md-3">
              <div class="input-group mb-2 ">
                <div class="input-group-prepend">
                  <div class="input-group-text">Nom</div>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-defaults"
                  onChange={this.handleChange} />
              </div>
            </div>

            <div class="col-auto col-md-3">
              <div class="input-group mb-2">
                <select id="inputState" class="form-control" onChange={this.selectChange}>
                  <option selected>Catégorie</option>
                  <option>Plante</option>
                  <option>Poison</option>
                  <option>Insecte</option>
                  <option>Psy</option>
                  <option>Combat</option>
                  <option>Sol</option>
                  <option>Roche</option>
                  <option>Normal</option>
                  <option>Eau</option>
                  <option>Feu</option>
                  <option>Glace</option>
                  <option>Vol</option>

                </select>
              </div>
            </div>

          </div>
        </form>
        {/* ----------------------------- CONTENT  ---------------------------------------- */}

        <div class='content'>
          {
            pokemons.map(pokemon => (
              <div Key={pokemon.ndex} class="card">
                <a href={`/pokemon/${pokemon.ndex}`}>
                  <img class={`img-pokemon ${pokemon.type1}-color`}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
                    alt="Pokemon">
                  </img>

                  <div class="card-body">
                    <span class="card-id ">#{pokemon.ndex} </span>
                    <h5 class="card-title">{pokemon.nom} </h5>
                    <button class={`btn  ${pokemon.type1}-color disabled `}>{pokemon.type1}</button>
                    <button class={`btn  ${pokemon.type2}-color disabled `}>{pokemon.type2}</button>

                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}


