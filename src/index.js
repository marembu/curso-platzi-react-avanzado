import React from "react";
import ReactDOM from "react-dom";

const Mensaje = () => {
  return <h1>Hola Mario </h1>;
};

class Mensage extends React.Component {
  render() {
    return <h1>Hola Mario </h1>;
  }
}

ReactDOM.render(<Mensaje />, document.getElementById("app"));
