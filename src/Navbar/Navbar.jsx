import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Backdrop from "../FrontPage/Modal/Backdrop";
import FormularioDeUsuarios from "../FrontPage/Modal/FormularioDeUsuarios";
import Modal from "../FrontPage/Modal/Modal";
import { Boton } from "../FrontPage/StyledComponents/componentes-de-inicio";
const Navbar = () => {
  const BarraDeNavegacion = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #2a9d8f;
    padding: 15px;
    a {
      color: white;
      font-weight: 700;
      text-decoration: none;
      font-size: 1.2rem;
      &:hover {
        border-bottom: 2px solid white;
      }
    }
    @media (max-width: 600px) {
   
    }
  `;
  const [ModalActivado, setModalActivado] = useState(false);
  const abrirModal = () => {
    setModalActivado(true);
  };
  const cerrarModal = () => {
    setModalActivado(false);
  };
  return (
    <BarraDeNavegacion>
      <NavLink to="/">Busca En Nuestro Calendario</NavLink>
      <Boton ancho="300px" primary="#E76F51" onClick={abrirModal}>
        Agregar Obituario
      </Boton>
      {ModalActivado ? (
        <>
          <Backdrop fn={cerrarModal} />
          <Modal>
            <FormularioDeUsuarios fn={cerrarModal} />
          </Modal>
        </>
      ) : null}
    </BarraDeNavegacion>
  );
};

export default Navbar;
