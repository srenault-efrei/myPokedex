import React from 'react';
import './pokemons.css';
import Layout from './Layout';


export default class Pokemons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fixePokemons: [],
      pokemons: [],
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

    if (event.target.value === 'DEFAULT') {
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
        {/* ----------------------------- FILTER  ---------------------------------------- */}

        <form>
          <div className="form-row align-items-center">
            <div className="col-auto col-md-3">
              <div className="input-group mb-2 ">
                <div className="input-group-prepend">
                  <div className="input-group-text">Nom</div>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-defaults"
                  onChange={this.handleChange} />
              </div>
            </div>

            <div className="col-auto col-md-3">
              <div className="input-group mb-2">
                <select  defaultValue={'Catégorie'} id="inputState" className="form-control" onChange={this.selectChange}>
                  <option value ="DEFAULT">Catégorie</option>
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

        <div className='content'>
          {
            pokemons.map(pokemon => (
              <div key={pokemon.ndex} className="card">
                <a href={`/pokemon/${pokemon.ndex}`}>
                  <img className={`img-pokemon ${pokemon.type1}-color`}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
                    alt="Pokemon">
                  </img>

                  <div className="card-body">
                    <span className="card-id ">#{pokemon.ndex} </span>
                    <h5 className="card-title">{pokemon.nom} </h5>
                    <button className={`btn  ${pokemon.type1}-color disabled `}>{pokemon.type1}</button>
                    {pokemon.type2 === undefined ? '' :
                      <button className={`btn  ${pokemon.type2}-color disabled `}>{pokemon.type2}</button>
                    }

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


