import React from 'react';

export default class ProfilePokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.ndex,
      dataPokemon: []
    };
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  async fetchPokemon() {

    const response = await fetch(`http://localhost:4000/pokemons/${this.state.id}`, {
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
    // const { dataPokemon } = this.state
    return (
      <div>
        <div class="panel panel-default">
  <div class="panel-heading">Entête</div>
  <div class="panel-body">
    Contenu du panneau
  </div>
</div> 

      </div>
    );
  }
}


