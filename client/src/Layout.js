import React from 'react';
import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function Layout(){

  
    return (

        <div>
          <a href='/'>Home</a>
          <div class = "header">
            <h1>POKEDEX</h1>
            <img class="fit-picture"
              src="https://www.ladn.eu/wp-content/uploads/2018/06/pokemon.jpg"
              alt="Pokemon">
            </img>
          </div>
        </div>
      );
  }

  export default Layout;

