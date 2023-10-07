//Importación de react
import React, { Component } from "react";

function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h2>Logout</h2>
    </div>
  );
}

function SaludarUsuario() {
  return (
    <div>
      <h2>!Bienvenid@ nuevamente!</h2>
    </div>
  );
}

function SaludarInvitado() {
  return (
    <div>
      <h2>Por favor, registrate</h2>
    </div>
  );
}

//Creación de componente mediante una clase
export default class RenderizadoCondicional extends Component {
  //Ejecución del contructor
  constructor(props) {
    super(props);
    //Generación del estado
    this.state = {
      sesion: true
    };
  }
  render() {
    return (
      <div>
        <h1>Renderizado Condicional</h1>
        {/*cuando la variable ture del estado sea verdadera renderice el componente login, de lo contrario 
          renderice Logout*/}
        {this.state.sesion ? <Login /> : <Logout />}
        {this.state.sesion ? <SaludarUsuario /> : <SaludarInvitado />}
      </div>
    );
  }
}
