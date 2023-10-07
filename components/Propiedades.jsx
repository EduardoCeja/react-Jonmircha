//Importación de react
import React from "react";
//Importacipon de la dependencia "prop-types"
import PropTypes from "prop-types";

//Exportación de maner por defecto
//En el componente de las propiedades recibe como parametro "props"
export default function Propiedades(props) {
  //return del código en jsx
  return (
    <di>
      <h1>{props.texto}</h1>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{props.arreglo.map(props.function).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </di>
  );
}

Propiedades.defaultProps = {
  texto: "Texto Predeterminado"
};

Propiedades.PropTypes = {
  numero: PropTypes.number
};
