import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./estilosvista.css";

import myImg from "../../../img/logo2.png";

const VistaPropietario = () => {
  //ESTADO VISIBILIDAD PARQUEADERO//
  const [isParqueaderoVisible, setIsParqueaderoVisible] = useState(true);

  //ESTADO PARA LA BARRA DE BUSQUEDA//
  const [searchTerm, setSearchTerm] = useState("");

  //ESTADO DE DISPONIBILIDAD SALON COMUNAL//
  const [citas, setCitas] = useState([
    {
      NoCita: 1,
      Nombre: "Juan Perez",
      NoDocumento: "12345678",
      Telefono: "1234567890",
      Fecha: "2023-07-30",
      Valor: 100,
    },
    {
      NoCita: 2,
      Nombre: "Maria Lopez",
      NoDocumento: "87654321",
      Telefono: "0987654321",
      Fecha: "2023-08-01",
      Valor: 200,
    },
    {
      NoCita: 3,
      Nombre: "Luisa Martinez",
      NoDocumento: "19404597",
      Telefono: "3138755960",
      Fecha: "2023-08-01",
      Valor: 600,
    },
  ]);

  //FUNCION PARA CAMBIO DE VISTAS DE PARQEUADERO A SALON COMUNAL //
  const handleToggleTables = () =>
    setIsParqueaderoVisible(!isParqueaderoVisible);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="vista-propietario">
      <header className="navbar">
        <div className="logo">
          <img src={myImg} alt="Logo" />
        </div>
        <div className="navbar-right">
          <button>Perfil</button>
          <Link to="/">Cerrar Sesión</Link>
        </div>
      </header>
      <div className="main-content">
        <nav className="side-nav">
          <ul className="lista-vistas">
            <li className="vista" onClick={handleToggleTables}>
              Parqueadero
            </li>
            <li
              className="vista"
              onClick={() => setIsParqueaderoVisible(false)}
            >
              Salón Comunal
            </li>
          </ul>
        </nav>
        <div className="contenedor">
          {isParqueaderoVisible ? (
            <div className="parqueadero-view">
              <h3>Disponibilidad Parqueadero</h3>
              <input
                type="text"
                className="search-bar"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>N* Espacio</th>
                      <th>Tip Espacio</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A01</td>
                      <td>Carro</td>
                      <td>Ocupado</td>
                    </tr>
                    <tr>
                      <td>A02</td>
                      <td>Carro</td>
                      <td>Vacio</td>
                    </tr>
                    <tr>
                      <td>A03</td>
                      <td>Carro</td>
                      <td>Ocupado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>N* Espacio</th>
                      <th>Tip Espacio</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Aa01</td>
                      <td>Moto</td>
                      <td>Ocupado</td>
                    </tr>
                    <tr>
                      <td>Aa02</td>
                      <td>Moto</td>
                      <td>Ocupado</td>
                    </tr>
                    <tr>
                      <td>Aa03</td>
                      <td>Moto</td>
                      <td>Ocupado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="salon-comunal-view">
              <h3>Disponibilidad Salon Comunal</h3>
              <table>
                <thead>
                  <tr>
                    <th>NoCita</th>
                    <th>Nombre</th>
                    <th>NoDocumento</th>
                    <th>Telefono</th>
                    <th>Fecha</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {citas.map((cita, index) => (
                    <tr key={index}>
                      <td>{cita.NoCita}</td>
                      <td>{cita.Nombre}</td>
                      <td>{cita.NoDocumento}</td>
                      <td>{cita.Telefono}</td>
                      <td>{cita.Fecha}</td>
                      <td>{cita.Valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VistaPropietario;
