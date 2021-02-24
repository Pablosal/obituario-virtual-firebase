import React from "react";
import FilaDeSemana from "../Components/FilaDeSemana";
import { ListadoPersonas } from "../StyledComponents/componentes-de-inicio";

const PaginaDeInicio = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FilaDeSemana />
    </div>
  );
};

export default PaginaDeInicio;
