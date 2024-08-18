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
  // constructor(props) {
  //   /* Constructor del componente para definir un estado, se encargará de controlar los elementos a mostrar en la vista */
  //   super(props);
  //   this.state = {
  //     currentView:
  //       "Viviendas" /* El conjutno de elementos predeterminados a mostrar son los referentes al espacio de Viviendas */,
  //   };
  // }
  // /* Metodos para la manipulación del estado del componente */
  // showViviendas = () => {
  //   console.log("estoy llamado");
  //   this.setState({ currentView: "Viviendas" });
  // };
  // showPropietarios = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Propietarios" });
  // };
  // showParqueadero = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Parqueadero" });
  // };
  // showInvitados = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Invitados" });
  // };
  // showScomunal = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Scomunal" });
  // };
  // showReuniones = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Reuniones" });
  // };
  // showPorteros = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Porteros" });
  // };
  // showAdministradores = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Administradores" });
  // };
  // showSolicitudes = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "Solicitudes" });
  // };
  // showEnvioCorreos = () => {
  //   console.log("estoy llamado");

  //   this.setState({ currentView: "EnvioCorreos" });
  // };
  // showGenerarReporte = () => {
  //   console.log("estoy llamado");
  //   this.setState({ currentView: "GenerarReporte" });
  // };
  // render() {
  //   const { currentView } =
  //     this
  //       .state; /* Creación de una constante que se encargará de capturar el estado (vista a mostrar) del componente */
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
