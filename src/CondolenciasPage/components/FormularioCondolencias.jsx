import React, { useState } from "react";
import { firebaseInstance } from "../../firebase/config";
import {
  Boton,
  Formulario,
  Input,
  InputGroup,
} from "../../FrontPage/StyledComponents/componentes-de-inicio";
const FormularioCondolencias = ({ userId }) => {
  const [comentario, setComentario] = useState({
    deParteDe: "",
    mensaje: "",
  });
  const handleChange = (e) => {
    setComentario({ ...comentario,[e.target.name]: e.target.value });
  };
  const handleSubmit = e =>{
    e.preventDefault()
    firebaseInstance.agregarComentariosADB(userId,comentario)
  }
  return (
    <Formulario onSubmit={handleSubmit}>
      <h2>Entrega tus condolencias a la Familia</h2>
      <InputGroup>
        <Input
          type="text"
          id="nombreDifunto"
          name="nombreDifunto"
          placeholder="Tu Nombre o Familia"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <textarea
          name="msgFamilia"
          id="msgFamilia"
          cols="30"
          placeholder="Envia tu mensaje personal a la Familia"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </InputGroup>
      <Boton primary="#5BC0EB" type="submit">
        Enviar Condolencias
      </Boton>
    </Formulario>
  );
};

export default FormularioCondolencias;
