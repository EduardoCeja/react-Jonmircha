//Importación de react
import React, { Component } from "react";

function EstadoHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      nombre: "Eduardo Ceja"
    };
    //Actualización del estado
    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      });
    }, 5000);
  }
  //renderizado del componente de la clase Estado
  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <p>{this.state.nombre}</p>
        <EstadoHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}
