import React from "react";
import "./styles.css";
import Componente from "../components/componente";
import Propiedades from "../components/Propiedades";
import Estado from "../components/Estado";
import RenderizadoCondicional from "../components/RenderizadoCondicional";
import RenderizadoElementos from "../components/RenderizadoElementos";
import Eventos from "../components/Eventos";

export default function App() {
  let nombre = "Eduardo Ceja Robles";
  let auth = true;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" />
      <h1>{nombre}</h1>
      <p>{auth ? "El usuario esta logeado" : "El usuario no esta logeado"}</p>
      <p>{2 + 1}</p>
      <ul>
        {estaciones.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <Componente msg="Hola desde un componente de una funcion expresada" />
      <hr />
      <h3>Clase: Curso React: 5. Propiedades - jonmircha</h3>
      {/*Carga del componente de "Propiedades"*/}
      <Propiedades
        cadena="Esto es una cadena de texto"
        numero={29}
        booleano={true}
        arreglo={[1, 2, 3, 4, 5]}
        objeto={{ nombre: "Eduardo", correo: "eduardopsy1@gmail.com" }}
        elementoReact={<p>Esto es un elemento React</p>}
        function={(num) => num * num}
        componenteReact={
          <Componente msg="Soy un componente pasado como Prop" />
        }
      />
      <hr />
      <h3>Clase: Curso de React: 6 Estado</h3>
      <Estado />
      <hr />
      <h3>Clase: Curso de React: 7 Renderizado Condicional</h3>
      <RenderizadoCondicional />
      <hr />
      <h3>Clase: Curso de React: 8 Renderizado Elementos</h3>
      <RenderizadoElementos />
      <hr />
      <h3>Clase: Curso de React: 9 Eventos & Binding</h3>
      <Eventos />
    </div>
  );
}
