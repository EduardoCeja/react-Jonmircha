//importación de React y se llama el objeto "Component" de React
import React, { Component } from "react";
//Importacion de la data del arreglo que se creo
import data from "../helpers/data.json";

//Componente nuevo para el rendericado de los elemntos del archivo .json
function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["Primavera", "Verano", "Otoño", "Invierno"]
    };
  }
  render() {
    //Mostrar el dato del objeto json
    console.log(data);
    return (
      <div>
        <h2>Redenderizado de Elementos</h2>
        <ol>
          {this.state.season.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h2>Frameworks Frontend JavaScript</h2>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
