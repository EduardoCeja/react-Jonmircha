//Importación de react
import React, { Component } from "react";

const Componente = (props) => <h2>{props.msg}</h2>;
/*
function Componente(props) {
  return <h1>{props.msg}</h1>;
}
*/
/*
//Como una clase que extiende de Component con un método render:
class Componente extends Component {
  render() {
    return <h1>Hola mundo</h1>;
  }
}*/
//Expoertación del componente class "Componente"
export default Componente;
