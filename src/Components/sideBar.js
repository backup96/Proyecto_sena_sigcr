import { Link } from "react-router-dom";
import TablaVivienda from "./Componentes_Admin/viviendas";
import { useState } from "react";
import TablaPropietarios from "./Componentes_Admin/propietarios";

const SideBar = () => {
    const [currentTable, setCurrentTable] = useState("Viviendas")

  return (
    <>
      <div className="d-flex flex-row h-100">
        <div>
          <div
            className="d-flex flex-column p-3 text-white bg-dark h-100"
            style={{ width: 280 }}
          >
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link
                  onClick={() => setCurrentTable("Viviendas")}
                  href="#"
                  className="nav-link active"
                  aria-current="page"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#home" />
                  </svg>
                  Viviendas
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setCurrentTable("Propietarios")}
                  href="#"
                  className="nav-link text-white"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#speedometer2" />
                  </svg>
                  Propietarios
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setCurrentTable("Parqueadero")}
                  href="#"
                  className="nav-link text-white"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#table" />
                  </svg>
                  Parqueadero
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setCurrentTable("Invitados")}
                  href="#"
                  className="nav-link text-white"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#grid" />
                  </svg>
                  Invitados
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setCurrentTable("Salon Comunal")}
                  href="#"
                  className="nav-link text-white"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#people-circle" />
                  </svg>
                  Salon Comunal
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setCurrentTable("Reuniones")}
                  href="#"
                  className="nav-link text-white"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#people-circle" />
                  </svg>
                  Reuniones
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setCurrentTable("Porteros")}
                  href="#"
                  className="nav-link text-white"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#people-circle" />
                  </svg>
                  Porteros
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setCurrentTable("Administradores")}
                  href="#"
                  className="nav-link text-white"
                >
                  <svg className="bi me-2" width={16} height={16}>
                    <use xlinkHref="#people-circle" />
                  </svg>
                  Administradores
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        {currentTable === "Viviendas" ? <TablaVivienda /> : <TablaPropietarios/>}
      </div>
    </>
  );
};

export default SideBar;
