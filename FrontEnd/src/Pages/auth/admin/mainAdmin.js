/* Importación de paquetes necesarios */
import React from "react"; /* Paquete necesario para manipular el estado del componente de clase MainAdmin */
/* Importación de iconos */
import { NavBar } from "../../../Components/navBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../../Components/sideBar";
/* Añadir iconos a la libraria */
library.add(faTrash);
library.add(faPenToSquare);

/* Componente de clase MainAdmin */
export function MainAdmin() {
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
}
// }

export default MainAdmin; /* Sentencia para la exportación del modulo Main al archivo de rutas App.js */
