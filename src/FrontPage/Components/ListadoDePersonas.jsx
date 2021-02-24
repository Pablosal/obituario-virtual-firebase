import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FormularioCondolencias from "../../CondolenciasPage/components/FormularioCondolencias";
import { ListadoPersonas } from "../StyledComponents/componentes-de-inicio";
const ListadoDePersonas = ({ listaDePersonas, activeDay }) => {
  useEffect(()=>{console.log(listaDePersonas);},[listaDePersonas])
  return (
    <>
      <h2>Últimos Obituarios</h2>
      <ul style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {listaDePersonas.length ? (
          listaDePersonas
            .filter((persona) => persona.fecha === activeDay.date)
            .map((persona) => (
              <ListadoPersonas key={persona.id}>
                <div>
                  <strong>
                    {" "}
                    {persona.comentarios
                      ? persona.comentarios.length
                      : "0"}{" "}
                    Condolencias
                  </strong>
                </div>
                <h2>
                  <Link to={`/${persona.id}`}>{persona.nombreDifunto}</Link>
                </h2>
                <p>
                  <strong>Lugar de Velacion: </strong>
                  {persona.direccion}
                </p>
              </ListadoPersonas>
            ))
        ) : (
          <h2>No hay obituarios por hoy</h2>
        )}
      </ul>
    </>
  );
};

export default ListadoDePersonas;
