import React from 'react';
import './App.css';
import Pokemons from './Pokemons'
import ProfilePokemon from './ProfilePokemon'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' >
              <Pokemons />
            </Route>

            <Route path='/pokemon/:id' >
            <ProfilePokemon />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }

}


export default App;
