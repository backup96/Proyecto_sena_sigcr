import React, { Component } from "react";
import { Link } from "react-router-dom";
import myImg from "../../../img/logo2.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);
library.add(faPenToSquare);
library.add(faClock);

class MainPortero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "Invitados",
    };
  }

  showInvitados = () => {
    console.log("estoy llamado");
    this.setState({ currentView: "Invitados" });
  };
  showParqueadero = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "Parqueadero" });
  };
  showViviendasyResidentes = () => {
    console.log("estoy llamado");

    this.setState({ currentView: "ViviendasyResidentes" });
  };
  
  render() {
    const { currentView } = this.state;
    return (
      <div className="row w-100">
        <div className="col-2">
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
                  onClick={this.showInvitados}
                  className="nav-link active"
                  aria-current="page"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#home" />
                  </svg>
                  Invitados
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.showParqueadero}
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
                  onClick={this.showViviendasyResidentes}
                  to="#"
                  className="nav-link text-white"
                >
                  <svg className="bi pe-none me-2" width={16} height={16}>
                    <use xlinkto="#grid" />
                  </svg>
                  Viviendas y Residentes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0">
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
                  <li className="nav-item ml-4 mr-3">
                    <Link to="/" className="btn btn-light" aria-disabled="true">
                      Cerrar sesion
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {currentView === "Invitados" && (
            <div id="Invitados" style={{ marginLeft: 90, marginTop: 20, width: "90%" }}>
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
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </form>
              </div>
              <div className="col">
                <Link className="btn btn-success m-0" aria-disabled="true">
                  Registrar Invitado
                </Link>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Invitados</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Parqueadero</th>
                  <th scope="col">Costo</th>
                  <th scope="col">Código</th>
                  <th scope="col">Tiempo</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Carlos García</th>
                  <td>310227073</td>
                  <td>carlos.garcia@example.com</td>
                  <td>A1</td>
                  <td>$8000</td>
                  <td>6-2-104</td>
                  <td>
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
                    <FontAwesomeIcon icon="pen-to-square" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ana Martínez</th>
                  <td>3145475390</td>
                  <td>ana.martinez@example.com</td>
                  <td>A2</td>
                  <td>$3500</td>
                  <td>3-1-114</td>
                  <td>
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
                    <FontAwesomeIcon icon="pen-to-square" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Juan Pérez</th>
                  <td>3206577841</td>
                  <td>juan.perez@example.com</td>
                  <td>B6</td>
                  <td>$4000</td>
                  <td>1-1-105</td>
                  <td>
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
                    <FontAwesomeIcon icon="pen-to-square" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Laura Rodrígue</th>
                  <td>3156500937</td>
                  <td>laura.rodriguez@example.com</td>
                  <td>C1</td>
                  <td>$4300</td>
                  <td>5-3-102</td>
                  <td>
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
                    <FontAwesomeIcon icon="pen-to-square" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">María López</th>
                  <td>3101234567</td>
                  <td>maria.lopez@example.com</td>
                  <td>B2</td>
                  <td>$2800</td>
                  <td>4-1-113</td>
                  <td>
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
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
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
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
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
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
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
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
                    <FontAwesomeIcon icon="fa-solid fa-clock"  className="ml-4" />
                  </td>
                  <td>
                    <FontAwesomeIcon icon="trash" className="mr-5" />
                    <FontAwesomeIcon icon="pen-to-square" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          )}

          {currentView === "Parqueadero" && (
            <div id="Parqueadero" style={{ marginLeft: 90, marginTop: 20, width: "90%" }}>
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
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </form>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Numero Espacio</th>
                  <th scope="col">Tipo Espacio</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A01</th>
                  <td>Carro</td>
                  <td>Ocupado</td>
                </tr>
                <tr>
                  <th scope="row">A02</th>
                  <td>Carro</td>
                  <td>Vacio</td>
                </tr>
                <tr>
                  <th scope="row">A03</th>
                  <td>Carro</td>
                  <td>Ocupado</td>
                </tr>
                <tr>
                  <th scope="row">B01</th>
                  <td>Carro</td>
                  <td>Vacio</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Numero Espacio</th>
                  <th scope="col">Tipo Espacio</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Aa01</th>
                  <td>Moto</td>
                  <td>Ocupado</td>
                </tr>
                <tr>
                <th scope="row">Aa02</th>
                  <td>Moto</td>
                  <td>Ocupado</td>
                </tr>
                <tr>
                <th scope="row">Aa03</th>
                  <td>Moto</td>
                  <td>Ocupado</td>
                </tr>
                <tr>
                <th scope="row">Bb01</th>
                  <td>Moto</td>
                  <td>Vacio</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                  <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          )}

          {currentView === "ViviendasyResidentes" && (
            <div id="ViviendasyResidentes" style={{ marginLeft: 90, marginTop: 20, width: "90%" }}>
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
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </form>
              </div>
              
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Códido de vivienda</th>
                  <th scope="col">Nombre Propietario</th>
                  <th scope="col">Numero Telefonico</th>
                  <th scope="col">Correo Elecctronico</th>
                  <th scope="col">Numero Documento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1-1-101</th>
                  <td>Fernando Rivas </td>
                  <td>320 1234567 </td>
                  <td>fernando.rivas@example.com</td>
                  <td>1.234.567.890</td>
                </tr>
                <tr>
                <th scope="row">1-1-102</th>
                  <td>Isabel Morales</td>
                  <td>321 2345678</td>
                  <td>isabel.morales@example.com </td>
                  <td>2.345.678.901</td>
                </tr>
                <tr>
                <th scope="row">1-1-103</th>
                  <td>Ricardo Herrera </td>
                  <td>322 3456789 </td>
                  <td>ricardo.herrera@example.com</td>
                  <td>3.456.789.012</td>
                </tr>
                <tr>
                <th scope="row">1-1-104</th>
                  <td>Paula Vega </td>
                  <td>323 4567890 </td>
                  <td>paula.vega@example.com</td>
                  <td>4.567.890.123</td>
                </tr>
                <tr>
                <th scope="row">Null</th>
                  <td>Null </td>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
                <tr>
                <th scope="row">Null</th>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                  <td>Null</td>
                </tr>
              </tbody>
            </table>
          </div>
          )}
          
        </div>
      </div>
    );
  }
}

export default MainPortero;
