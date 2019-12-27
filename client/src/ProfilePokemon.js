import React from 'react';
import './profilePokemon.css';

export default class ProfilePokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPokemon: []
    };
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  async fetchPokemon() {

    let url = document.location.href
    let urlSplit = url.split('/')
    let ndex = urlSplit[urlSplit.length - 1]

    const response = await fetch(`http://localhost:4000/pokemons/${ndex}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();

    this.setState({
      dataPokemon: data
    });
  }



  render() {

    const { dataPokemon } = this.state

    console.log(dataPokemon)
  
    return (
      <div>
        <a href ='/'>
          <img src='https://cdn.icon-icons.com/icons2/562/PNG/512/arrow-address-back_icon-icons.com_54065.png'
          alt = 'fleche'
          class='fleche-picture'>
          </img>
        </a>
   
        <div class='content'>
          {
            dataPokemon.map(pokemon => (
              <div class="profile">
                <h2 class={` ${pokemon.type1}-color`}>{pokemon.nom} #{pokemon.ndex}</h2>
                <img class='img-profile'
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
                  alt="Pokemon">
                </img>
                <button class={`btn  ${pokemon.type1}-color disabled `}>{pokemon.type1}</button>
                <button class={`btn  ${pokemon.type2}-color disabled `}>{pokemon.type2}</button>

                <br></br>
                <h4 class={` ${pokemon.type1}-color`}>Profile</h4>

                <table class='tabless'>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> <strong>Taille : </strong>{pokemon.taille} m</td>
                      <td> <strong>Poids :</strong> {pokemon.poids} kg</td>
                    </tr>
                    <tr>
                      <td> <strong>Groupoeuf1 :</strong> {pokemon.groupoeuf1}</td>
                      <td> <strong>Groupoeuf2 :</strong> {pokemon.groupoeuf2}</td>
                    </tr>
                    <tr>
                      <td> <strong>Espece : </strong>{pokemon.espece}</td>
                      <td> <strong>Couleur : </strong>{pokemon.couleur}</td>
                    </tr>

                    <tr>
                      <td> <strong>Capspe1 : </strong>{pokemon.capspe1}</td>
                      <td> <strong>Capspe2 : </strong>{pokemon.capspe2}</td>
                    </tr>
                  </tbody>

                </table>

                <h4 class={` ${pokemon.type1}-color`}>Attaques</h4>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Niveau</th>
                      <th scope="col">Nom</th>
                      <th scope="col">Puissance</th>
                      <th scope="col">Precision</th>
                      <th scope="col">Pp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pokemon.attaques.map(attaque =>(

                        <tr>
                        <th>{attaque.niveau}</th>
                        <td>{attaque.nom}</td>
                        <td>{attaque.puissance}</td>
                        <td>{attaque.precision}</td>
                        <td>{attaque.pp}</td>
                      </tr>
                      ))
                    }
                   
                    
                  </tbody>
                </table>
                <h4 class={` ${pokemon.type1}-color`}>Autres informations</h4>

                <table class='tabless'>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> <strong>Nomen : </strong>{pokemon.nomen} m</td>
                      <td> <strong>Nomja :</strong> {pokemon.nomja} kg</td>
                    </tr>
                    <tr>
                      <td> <strong>Nomtm :</strong> {pokemon.nomtm}</td>
                      <td> <strong>Nomde :</strong> {pokemon.nomde}</td>
                    </tr>
                    <tr>
                      <td> <strong>Odex : </strong>{pokemon.odex}</td>
                      <td> <strong>Opdex : </strong>{pokemon.opdex}</td>
                    </tr>

                    <tr>
                      <td> <strong>Fmratio : </strong>{pokemon.fmratio}</td>
                      <td> <strong>Oeufpas : </strong>{pokemon.oeufpas}</td>
                    </tr>
                    <tr>
                      <td> <strong>Expmax : </strong>{pokemon.expmax}</td>
                      <td> <strong>Captureval : </strong>{pokemon.captureval}</td>
                    </tr>
                    <tr>
                      <td> <strong>Forme : </strong>{pokemon.forme}</td>
                      <td> <strong>Oeufpas : </strong>{pokemon.oeufpas}</td>
                    </tr>
                  </tbody>

                </table>

              </div>
            ))
          }
        </div>

      </div>
    );
  }
}


