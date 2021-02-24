import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UsuariosContext from "./ContextAPI/UsuariosContext";

ReactDOM.render(
  <React.StrictMode>
    <UsuariosContext>
      <App />
    </UsuariosContext>
  </React.StrictMode>,
  document.getElementById("root")
);


