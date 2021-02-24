import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { firebaseInstance } from "../../firebase/config";
import FormularioCondolencias from "../components/FormularioCondolencias";
import cross from "../../images/cross.png";
import {
  Boton,
  CenterElementDiv,
} from "../../FrontPage/StyledComponents/componentes-de-inicio";
const PersonalPage = () => {
  const param = useParams();
  const [usuario, setUsuario] = useState();
  useEffect(() => {
    const obtenerUsuario = async (docId) => {
      const usuario = await firebaseInstance.db
        .collection("obituarios")
        .doc(docId.id)
        .get();
      await setUsuario(usuario.data());
    };
    obtenerUsuario(param);
  }, [param]);
  if (usuario) {
    return (
      <CenterElementDiv>
        <div
          style={{
            width: "50%",
          }}
        >
          <div
            className="head"
            style={{
              backgroundColor: "#2A9D8F",
              color: "white",
              width: "100%",
              padding:"5px",
              margin:"5px"
            }}
          >
            <h1 style={{ textAlign: "center" }}>{usuario.nombreDifunto}</h1>
          </div>
          <div
            className="body"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Publicado: {usuario.fecha}</h3>
            <img src={cross} width="45px" alt="" />
          </div>
          <div
            className="footer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ textAlign: "center" }}>{usuario.mensajePersonal}</p>
            <h3 style={{ textAlign: "center" }}>
              Sus funerales se efectuaran en {usuario.direccion}
            </h3>

          </div>
          <div className="Coments" style={{ width: "100%" }}>
            <FormularioCondolencias userId={param.id} />
          </div>
        </div>
      </CenterElementDiv>
    );
  } else {
    return <h1>Cargando...</h1>;
  }
};

export default PersonalPage;
