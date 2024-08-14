/* Importación de paquetes necesarios */
import React, {
  Component,
} from "react"; /* Paquete necesario para manipular el estado del componente de clase MainAdmin */
import { Link } from "react-router-dom"; /* Etiqueta Link que reemplazara las etiquetas html 'a' */
import myImg from "../../../img/logo2.png"; /* Logo del conjutno */
/* Importación de iconos */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Añadir iconos a la libraria */
library.add(faTrash);
library.add(faPenToSquare);

/* Componente de clase MainAdmin */
class MainAdmin extends Component {
  constructor(props) {
    /* Constructor del componente para definir un estado, se encargará de controlar los elementos a mostrar en la vista */
    super(props);
    this.state = {
      currentView:
        "Viviendas" /* El conjutno de elementos predeterminados a mostrar son los referentes al espacio de Viviendas */,
    };
  }
  /* Metodos para la manipulación del estado del componente */
  showViviendas = () => {
    console.log("estoy llamado");
    this.setState({ currentView: "Viviendas" });
  };
  showPropietarios = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Propietarios" });
  };
  showParqueadero = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Parqueadero" });
  };
  showInvitados = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Invitados" });
  };
  showScomunal = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Scomunal" });
  };
  showReuniones = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Reuniones" });
  };
  showPorteros = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Porteros" });
  };
  showAdministradores = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Administradores" });
  };
  showSolicitudes = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Solicitudes" });
  };
  showEnvioCorreos = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "EnvioCorreos" });
  };
  showGenerarReporte = () => {
    console.log("estoy llamado");
    this.setState({ currentView: "GenerarReporte" });
  };
  render() {
    const { currentView } =
      this
        .state; /* Creación de una constante que se encargará de capturar el estado (vista a mostrar) del componente */
    return (
      <div className="vh-100 p-0 row">
        <div className="col-1">
          <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-secondary"
            style={{ width: 280, height: "100%" }}
          >
            <img
              src={myImg}
              className="img-thumbnail mb-3 mb-md-0 me-md-auto"
              alt="true"
              width={60}
              height={60}
            />
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link
                  onClick={
                    this.showViviendas
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  className="nav-link active"
                  aria-current="page"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#home" />
                  </svg>
                  Viviendas
                </Link>
              </li>
              <li>
                <Link
                  onClick={
                    this.showPropietarios
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#speedometer2" />
                  </svg>
                  Propietarios
                </Link>
              </li>
              <li>
                <Link
                  onClick={
                    this.showParqueadero
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  to="#"
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#table" />
                  </svg>
                  Parqueadero
                </Link>
              </li>
              <li>
                <Link
                  onClick={
                    this.showInvitados
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  to="#"
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#grid" />
                  </svg>
                  Invitados
                </Link>
              </li>
              <li>
                <Link
                  onClick={
                    this.showScomunal
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  to="#"
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#people-circle" />
                  </svg>
                  Salon comunal
                </Link>
              </li>
              <li>
                <Link
                  onClick={
                    this.showReuniones
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  to="#"
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#people-circle" />
                  </svg>
                  Reuniones
                </Link>
              </li>
              <li>
                <Link
                  onClick={
                    this.showPorteros
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  to="#"
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#people-circle" />
                  </svg>
                  Porteros
                </Link>
              </li>
              <li>
                <Link
                  onClick={
                    this.showAdministradores
                  } /* Invocación de las funciones de manipulación del estado de componente */
                  to="#"
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#people-circle" />
                  </svg>
                  Administradores
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          {/* Barra de navegación estatica (siempre estará presente en la vista sin importar el estado del componente) */}
          <nav
            className="navbar navbar-expand-lg bg-secondary"
            style={{ height: 66, border: "none" }}
          >
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse justify-content-md-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item ml-4 mr-2">
                    <Link
                      onClick={this.showSolicitudes}
                      className="btn btn-light active"
                      aria-current="page"
                      to="#"
                    >
                      Solicitudes
                    </Link>
                  </li>
                  <li className="nav-item ml-4 mr-2">
                    <Link
                      onClick={this.showEnvioCorreos}
                      className="btn btn-light"
                      to="#"
                    >
                      Enviar información
                    </Link>
                  </li>
                  <li className="nav-item ml-4 mr-2">
                    <Link
                      onClick={this.showGenerarReporte}
                      className="btn btn-light"
                      to="#"
                    >
                      Generar reporte
                    </Link>
                  </li>
                  <li className="nav-item ml-4 mr-3">
                    <Link to="/" className="btn btn-light" aria-disabled="true">
                      Cerrar sesion
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Expresion condicional que se encarga de alternar los conjuntos de elementos segun el estado del componente */}
          {currentView === "Viviendas" && (
            <div
              id="Viviendas"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link className="btn btn-success m-0" aria-disabled="true">
                    Registrar vivienda
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Códido de vivienda</th>
                    <th scope="col">Numero de parqueadero</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>1</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-5" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Propietarios" && (
            <div
              id="Propietarios"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link
                    className="btn btn-success m-0"
                    aria-disabled="true"
                    to="/InsertForm"
                  >
                    Registrar propietario
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Códido de vivienda</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">N.Documento</th>
                    <th scope="col">Meses atrazados</th>
                    <th scope="col">Nom.Contacto adicional</th>
                    <th scope="col">Tel.Adicional</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Joan Moreno</td>
                    <td>322569471</td>
                    <td>joan@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Julian Prieto</td>
                    <td>322569471</td>
                    <td>prieto@gmail.com</td>
                    <td>1033658974</td>
                    <td>100</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Valery Zambrano</td>
                    <td>322569471</td>
                    <td>valery@gmail.com</td>
                    <td>1033658974</td>
                    <td>200</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Sara Araque</td>
                    <td>322569471</td>
                    <td>sara@gmail.com</td>
                    <td>1033658974</td>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Denys Fontecha</td>
                    <td>322569471</td>
                    <td>denys@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>John Arevalo</td>
                    <td>322569471</td>
                    <td>john@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>David Santiago</td>
                    <td>322569471</td>
                    <td>gigi@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Santiago Arias</td>
                    <td>322569471</td>
                    <td>sanalejo@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Narly Sanchez</td>
                    <td>322569471</td>
                    <td>narly@gmail.com</td>
                    <td>1033658974</td>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Parqueadero" && (
            <div
              id="Parqueadero"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link className="btn btn-success m-0" aria-disabled="true">
                    Registrar nuevo espacio
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">N.Espacio</th>
                    <th scope="col">Tipo de espacio</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Joan Moreno</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Julian Prieto</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Valery Zambrano</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Sara Araque</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Denys Fontecha</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>John Arevalo</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>David Santiago</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Santiago Arias</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Narly Sanchez</td>
                    <td>322569471</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Invitados" && (
            <div
              id="Invitados"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link className="btn btn-success m-0" aria-disabled="true">
                    Registrar invitado
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Códido de vivienda</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">N.Documento</th>
                    <th scope="col">Meses atrazados</th>
                    <th scope="col">Nom.Contacto adicional</th>
                    <th scope="col">Tel.Adicional</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Joan Moreno</td>
                    <td>322569471</td>
                    <td>joan@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Julian Prieto</td>
                    <td>322569471</td>
                    <td>prieto@gmail.com</td>
                    <td>1033658974</td>
                    <td>100</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Valery Zambrano</td>
                    <td>322569471</td>
                    <td>valery@gmail.com</td>
                    <td>1033658974</td>
                    <td>200</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Sara Araque</td>
                    <td>322569471</td>
                    <td>sara@gmail.com</td>
                    <td>1033658974</td>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Denys Fontecha</td>
                    <td>322569471</td>
                    <td>denys@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>John Arevalo</td>
                    <td>322569471</td>
                    <td>john@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>David Santiago</td>
                    <td>322569471</td>
                    <td>gigi@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Santiago Arias</td>
                    <td>322569471</td>
                    <td>sanalejo@gmail.com</td>
                    <td>1033658974</td>
                    <td>10</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Narly Sanchez</td>
                    <td>322569471</td>
                    <td>narly@gmail.com</td>
                    <td>1033658974</td>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>33322255588</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Scomunal" && (
            <div
              id="Propietarios"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link className="btn btn-success m-0" aria-disabled="true">
                    Registrar cita salon comunal
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Numero de Cita</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">N.Documento</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0001</th>
                    <td>Santiago Rojas</td>
                    <td>9481274356</td>
                    <td>3104829357</td>
                    <td>2024-01-15</td>
                    <td>500000</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0002</th>
                    <td>Valentina Muñoz</td>
                    <td>6842195237</td>
                    <td>3115938475</td>
                    <td>2024-02-20</td>
                    <td>450000</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0003</th>
                    <td>Alejandra Ruiz</td>
                    <td>1598364725</td>
                    <td>3121842963</td>
                    <td>2024-03-05</td>
                    <td>550000</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0004</th>
                    <td>Camilia Morales</td>
                    <td>4761298374</td>
                    <td>3132957481</td>
                    <td>2024-04-10</td>
                    <td>600000</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0005</th>
                    <td>Felipe Castillo</td>
                    <td>3584719283</td>
                    <td>3143847592</td>
                    <td>2024-05-25</td>
                    <td>520000</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Reuniones" && (
            <div
              id="Reuniones"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link className="btn btn-success m-0" aria-disabled="true">
                    Registrar Reuniones
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Motivo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Horario</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0001</th>
                    <td>Presupuesto</td>
                    <td>2024-01-25</td>
                    <td>10:00 AM</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0002</th>
                    <td>Proveedores</td>
                    <td>2024-02-14</td>
                    <td>03:00 AM</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0003</th>
                    <td>Mantenimiento</td>
                    <td>2024-03-19</td>
                    <td>09:30 AM</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0004</th>
                    <td>Clave: Normas</td>
                    <td>2024-04-11</td>
                    <td>04:00 AM</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">0005</th>
                    <td>Seguridad</td>
                    <td>2024-05-06</td>
                    <td>11:00 AM</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Porteros" && (
            <div
              id="Porteros"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link className="btn btn-success m-0" aria-disabled="true">
                    Registrar Porteros
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">N.Documento</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">N.Documento</th>
                    <th scope="col">Tipo Turno</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Contraseña</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Mateo Lopez</th>
                    <td>36748294517</td>
                    <td>3204856721</td>
                    <td>mateo.lopez@example.com</td>
                    <td>Diurno</td>
                    <td>mateolopez</td>
                    <td>M@teo2024</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Sofia Martinez</th>
                    <td>2893617524</td>
                    <td>32156584927</td>
                    <td>sofia.martinez@example.com</td>
                    <td>Diurno</td>
                    <td>sofiamartinez</td>
                    <td>S0fia2024</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Samuel Torres</th>
                    <td>88715396248</td>
                    <td>3224719385</td>
                    <td>samuel.torres@example.com</td>
                    <td>Nocturno</td>
                    <td>samueltorres</td>
                    <td>S@muel2024</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Gabriela Rios</th>
                    <td>5624839172</td>
                    <td>3235829173</td>
                    <td>gabriela.rios@example.com</td>
                    <td>Nocturno</td>
                    <td>gabrielarios</td>
                    <td>G@briela2024</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Administradores" && (
            <div
              id="Administradores"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div className="row mb-3">
                <div className="col">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col">
                  <form className="d-flex" role="search">
                    <select className="form-control me-2">
                      <option defaultValue={0}>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </form>
                </div>
                <div className="col">
                  <Link className="btn btn-success m-0" aria-disabled="true">
                    Registrar Administradores
                  </Link>
                </div>
              </div>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Documento</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Nombre Conjunto Adm</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Contraseña</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Laura Muñoz</th>
                    <td>10234456789</td>
                    <td>3216547890</td>
                    <td>laura.muñoz@example.com</td>
                    <td>Conjunto Torres Santa Isabel</td>
                    <td>Imuñoz</td>
                    <td>Muñoz2024!</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Diego Castillo</th>
                    <td>1023456790</td>
                    <td>3211234567</td>
                    <td>diego.castillo@example.com</td>
                    <td>Conjunto Torres Santa Isabel</td>
                    <td>dcastillo</td>
                    <td>Diego123!</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Paula Mejia</th>
                    <td>1023456791</td>
                    <td>3162345678</td>
                    <td>paula.meji@example.com</td>
                    <td>Conjunto Torres Santa Isabel</td>
                    <td>pmejia</td>
                    <td>Mejia2023</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Alejandro Herrera</th>
                    <td>1021456793</td>
                    <td>33143456789</td>
                    <td>alejandra.herrera@example.com</td>
                    <td>Conjunto Torres Santa Isabel</td>
                    <td>aherrera</td>
                    <td>Herrera456!</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Daniela Morales</th>
                    <td>1023456793</td>
                    <td>3194567890</td>
                    <td>daniela.morales@example.com</td>
                    <td>Conjunto Torres Santa Isabel</td>
                    <td>dmorales</td>
                    <td>Morales789</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Null</th>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>Null</td>
                    <td>
                      <FontAwesomeIcon icon="trash" className="mr-3" />
                      <FontAwesomeIcon icon="pen-to-square" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "Solicitudes" && (
            <div
              id="Solicitudes"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <div class="list-group">
                <Link
                  href="#"
                  class="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Solicitud creación de cuenta</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">John Doe - Apartamento 10112</p>
                </Link>
                <Link href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Alquiler del salon comunal</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Reunion de recorte</p>
                  <small class="text-body-secondary">
                    Dia 27 de febrero - hora: 9:30-12:00
                  </small>
                </Link>
                <Link href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">
                      Solicitud de renta de espacio del parqueadero
                    </h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Abby Adler - Apartamento 10213</p>
                </Link>
              </div>
            </div>
          )}
          {currentView === "EnvioCorreos" && (
            <div
              id="EnvioCorreos"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <form action="#" className="mb-3">
                <div className="mb-3"></div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Cuerpo de la circular
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Enviar circular
                </button>
              </form>
              <form action="#" className="mb-3">
                <button type="submit" class="btn btn-primary">
                  Enviar recibos de pago de administración
                </button>
              </form>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Estado de envio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">joan@gmail.com</th>
                    <td>Enviado</td>
                  </tr>
                  <tr>
                    <th scope="row">prieto@gmail.com</th>
                    <td>Correo rebotado</td>
                  </tr>
                  <tr>
                    <th scope="row">valery@gmail.com </th>
                    <td>Correo rebotado</td>
                  </tr>
                  <tr>
                    <th scope="row">sara@gmail.com </th>
                    <td>Correo rebotado</td>
                  </tr>
                  <tr>
                    <th scope="row">denys@gmail.com </th>
                    <td>Enviado</td>
                  </tr>
                  <tr>
                    <th scope="row">john@gmail.com </th>
                    <td>Enviado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {currentView === "GenerarReporte" && (
            <div
              id="GenerarReporte"
              style={{ marginLeft: 140, marginTop: 20, width: "90%" }}
            >
              <form action="#" className="mb-3">
                <div className="mb-3"></div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Cuerpo de la circular
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </form>
              <form action="#" className="mb-3"></form>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Vivienda</th>
                    <th scope="col">Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1-1-401</th>
                    <td>520000</td>
                  </tr>
                  <tr>
                    <th scope="row">1-3-201</th>
                    <td>789000</td>
                  </tr>
                  <tr>
                    <th scope="row">4-1-101</th>
                    <td>201000</td>
                  </tr>
                  <tr>
                    <th scope="row">6-2-303</th>
                    <td>850000</td>
                  </tr>
                  <tr>
                    <th scope="row">7-1-602</th>
                    <td>101000</td>
                  </tr>
                  <tr>
                    <th scope="row">2-2-502</th>
                    <td>430000</td>
                  </tr>
                  <tr>
                    <th scope="row">SALDO TOTAL</th>
                    <td>2891000</td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" class="btn btn-primary">
                Generar PDF
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainAdmin; /* Sentencia para la exportación del modulo 
                          Main al archivo de rutas App.js */
