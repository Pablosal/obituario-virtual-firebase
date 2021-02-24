import { useContext, useState } from "react";
import { contextoDeUsuarios } from "../../ContextAPI/UsuariosContext";
import {
  Boton,
  Formulario,
  Input,
  InputGroup,
} from "../StyledComponents/componentes-de-inicio";
import moment from 'moment'
import  { firebaseInstance } from "../../firebase/config";


const FormularioDeUsuarios = ({fn}) => {
  const [nuevoPosteo, setNuevoPosteo] = useState({
    nombreDifunto: "",
    direccion: "",
    fecha: "",
    mensajePersonal: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    firebaseInstance.agregarObtuarioADB(nuevoPosteo)
    fn()
  };
  const handleChange = (e) => {
    if (e.target.name === "fecha") {
      setNuevoPosteo({
        ...nuevoPosteo,
        [e.target.name]: moment(e.target.value).format("DD/MM/YYYY"),
      });
    } else {
      setNuevoPosteo({ ...nuevoPosteo, [e.target.name]: e.target.value });
    }
  };
  return (
    <Formulario  onSubmit={handleSubmit}>
      <h2 style={{textTransform:"uppercase",textAlign:"center"}}>Agrega un Obituario</h2>
      <InputGroup className="form-group">
        <label htmlFor="nombreDifunto">Nombre Completo: </label>
        <Input
          type="text"
          id="nombreDifunto"
          name="nombreDifunto"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup className="form-group">
        <label htmlFor="Direccion">Direccion de Velatorio </label>
        <Input
          type="text"
          id="Direccion"
          name="direccion"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup className="form-group">
        <label htmlFor="fechaVelacion">Fecha de Velación</label>
        <Input
          type="date"
          id="fechaVelacion"
          name="fecha"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup className="form-group">
        <label htmlFor="mensajePersonal">Mensaje Personal</label>
        <textarea
          name="mensajePersonal"
          id="mensajePersonal"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </InputGroup>
      <Boton  style={{ width: "50%" }} primary="#5BC0EB" type="submit">
        Crear Nuevo Registro
      </Boton>
    </Formulario>
  );
};

export default FormularioDeUsuarios;
