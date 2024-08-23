import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* Importación de iconos */
import { NavBar } from "../../../Components/Componentes_Propietario/navBar";
import SideBar from "../../../Components/Componentes_Propietario/sideBar";

import { useUser } from "../../../userContext";

const MainPropietario = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/LoginPropietario");
    }
  })
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <div>
          <NavBar />
        </div>
        <div className="h-100">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default MainPropietario;
