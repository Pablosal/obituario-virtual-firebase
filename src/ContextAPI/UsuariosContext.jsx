import { createContext, useEffect, useState } from "react";
import { firebaseInstance } from "../firebase/config";
import { todayObject } from "../Utils/ConsumirFechas";

export const contextoDeUsuarios = createContext();

const UsuariosContext = (props) => {
  const [activeDate, setActiveDate] = useState(todayObject);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    firebaseInstance.db
      .collection("obituarios")
      .onSnapshot(manejarSnapshot);
  }, []);
  const dummyPeople = [
    {
      persona: "Dominic Toreto",
      nCondolencias: 0,
      Ubicacion: "Parque El Recuerdo",
      fechaDeIngreso: "21/01/2021",
    },
  ];

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setUsuarios(productos);
    console.log("Usuarios", productos);
  }
  const añadirDiaActivo = (date) => {
    setActiveDate(date);
  };
  return (
    <contextoDeUsuarios.Provider
      value={{ usuarios, añadirDiaActivo, dummyPeople }}
    >
      {props.children}
    </contextoDeUsuarios.Provider>
  );
};

export default UsuariosContext;
