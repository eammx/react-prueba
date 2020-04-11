import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const SaludarEnIdiomas = ({idioma = 'en',nombre = 'nombre'}) =>{
  const saludo = idioma === 'es'?'Hola':'Hello';
  return <p>{saludo} {nombre}</p>
  }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Ernesto'
    };
  }

  

  render() {
    return (
      <div>        
        <SaludarEnIdiomas idioma='es' nombre ='ernesto'/>
        <p>
          Iniciar aplicación :-)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
