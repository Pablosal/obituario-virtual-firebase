import styled, { css } from "styled-components";
import ListadoDePersonas from "../Components/ListadoDePersonas";

export const DateRow = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 2px solid #e76f51;
  width: 100%;
  color: white;
  font-size: 1.5rem;
  padding: 12px;
  li {
    list-style: none;
    padding: 2px;
    cursor: pointer;
    width: 100%;
    padding: 10px;
  }
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Boton = styled.button`
  background-color: ${(props) => (props.primary ? props.primary : "#211A1E")};
  border: none;
  width: ${(props) => (props.ancho ? props.ancho : "50%")};
  padding: 15px;
  font-size: 1rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  margin: 5px;
  &:active {
    background-color: red;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  textarea {
    width: 50%;
    padding: 5px;
  }
`;

export const Input = styled.input`
  padding: 5px;
  width: 50%;
`;

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justfy-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #e76f51;
`;
export const TarjetasParaUsuario = styled.div`
  border: 2px solid black;
  min-width: 80%;
  min-height: 300px;
`;
export const CabezaParaUsuario = styled.div`
  background-color: red;
  padding: 10px;
  border-bottom: 2px solid black;

  h1,
  h2,
  h3 {
    margin: 0;
  }
`;
export const ListadoPersonas = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 1px solid grey;
  width: 80%;
  h2 {
    margin: 0;
  }
`;
export const CenterElementDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
