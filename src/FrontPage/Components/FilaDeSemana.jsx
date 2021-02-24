import React, { useContext, useEffect, useState } from "react";
import { contextoDeUsuarios } from "../../ContextAPI/UsuariosContext";
import newDays, { todayObject } from "../../Utils/ConsumirFechas";
import { DateRow } from "../StyledComponents/componentes-de-inicio";
import ListadoDePersonas from "./ListadoDePersonas";
const FilaDeSemana = () => {
  const {añadirDiaActivo,usuarios} = useContext(contextoDeUsuarios)
  const [activeDate, setActiveDate] = useState(todayObject);
  const [weekDays, setWeekDays] = useState(newDays);
  const handleClick = async (day) => {
    day.active = true;
    setActiveDate(() => day);
    añadirDiaActivo(activeDate)
  };

  useEffect(() => {
    console.log(usuarios);
  }, [usuarios]);

  if (activeDate) {
    return (
      <div>
        <DateRow>
          {weekDays.map((day) => (
            <li
            onClick={() => handleClick(day)}
            key={day.date}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: `${
                  day.date === activeDate.date ? "#2A9D8F" : "#211A1E"
                }`,
              }}
            >
              <div >
                {day.dayOfWeek}
              </div>
              <small style={{ fontSize: "0.8rem" }}>{day.date}</small>
            </li>
          ))}
        </DateRow>
        <ListadoDePersonas activeDay={activeDate} listaDePersonas={usuarios} />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default FilaDeSemana;
