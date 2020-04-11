import React, { Component,useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello'; 
import './style.css';

const SaludarEnIdiomas = ({idioma = 'en',nombre = 'nombre'}) =>{
  const saludo = idioma === 'es'?'Hola':'Hello';
  return <p>{saludo} {nombre}</p>
  }

  const Button =() =>{
    const [conteo,setConteo]= useState(0);
    return (
      <div>
      <p>Presionado: {conteo}</p>
      <button onClick = { ()=>setConteo(conteo +1)}>Click en mi!</button>
      </div>
    )
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
        <Button/>
      </div>      
    );
  }
}

render(<App />, document.getElementById('root'));
