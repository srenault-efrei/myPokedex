import React from 'react';
import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function Layout() {


  return (

    <div>
      <div className="header">
        <h1>POKEDEX</h1>
        <a href='/'> <img className="fit-picture"
          src="https://pokestrat.io/images/badges/19.png"
          alt="Pokemon">
        </img>
        </a>

      </div>
    </div>
  );
}

export default Layout;

