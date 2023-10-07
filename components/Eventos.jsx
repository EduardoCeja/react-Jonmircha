//Importación de react
import React, { Component } from "react";

//Puedes agregar manejadores de eventos a elementos JSX utilizando atributos como 'onClick', 'onChange', 'onSubmit' entre otros. Por ejemplo:
function MiComponenteEvent() {
  const handleClick = () => {
    alert("Haz hecho clic en el botón.");
  };
  return <button onClick={handleClick}>Haz clic</button>;
}

//Spuedes utilizar una función de flecha para envolver la función manejadora y pasar los argumentos necesarios. Por ejemplo

function MiComponenteEventOne() {
  const handleButtonClick = (message) => {
    alert(`Mensaje: ${message}`);
  };
  return (
    <button onClick={() => handleButtonClick("Hola desde el botón")}>
      Haz clic
    </button>
  );
}

//Creación de componente mediante una clase
//Y se esxtiende la clase del componente de react "Component"
export default class Eventos extends Component {
  //render() en React es un método especial que debe estar presente en todos los componentes de clase de React
  render() {
    return (
      <div>
        <h2>Eventos en componentes de Class </h2>
        <MiComponenteEvent />
        <br />
        <br />
        <MiComponenteEventOne />
      </div>
    );
  }
}
