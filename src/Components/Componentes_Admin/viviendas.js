import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
/* Añadir iconos a la libraria */
library.add(faTrash);
library.add(faPenToSquare);

const TablaVivienda = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  // Datos de ejemplo
  const data = [
    { codigo: "1101", parquedero: "3" },
    { codigo: "1102", parquedero: "5" },
    { codigo: "1103", parquedero: "7" },
    { codigo: "1104", parquedero: "9" },
    { codigo: "1105", parquedero: "11" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    { codigo: "1106", parquedero: "13" },
    // Agrega más registros si es necesario
  ];
  // Cálculo del índice de los registros actuales a mostrar
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  // Cálculo del total de páginas
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-100 h-100">
      <div class="card m-0 h-100">
        <div class="card-body">
          <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12">
                <table
                  id="example2"
                  class="table table-bordered table-hover dataTable dtr-inline"
                  aria-describedby="example2_info"
                >
                  <thead>
                    <tr>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Rendering engine: activate to sort column ascending"
                      >
                        Codigo de vivienda
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Numero de parquedadero
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRecords.map((record, index) => (
                      <tr key={index}>
                        <td>{record.codigo}</td>
                        <td>{record.parquedero}</td>
                        <td>
                          <FontAwesomeIcon icon={faTrash} className="mr-3" />
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th rowspan="1" colspan="1">
                        Codigo de vivienda
                      </th>
                      <th rowspan="1" colspan="1">
                        Numero de parquedadero
                      </th>
                      <th rowspan="1" colspan="1">
                        Acciones
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-5">
                <div
                  class="dataTables_info"
                  id="example2_info"
                  role="status"
                  aria-live="polite"
                >
                  Mostrando {indexOfFirstRecord + 1} a{" "}
                  {indexOfLastRecord > data.length
                    ? data.length
                    : indexOfLastRecord}{" "}
                  de {data.length} registros
                </div>
              </div>
              <div class="col-sm-12 col-md-7">
                <div
                  class="dataTables_paginate paging_simple_numbers"
                  id="example2_paginate"
                >
                  <ul class="pagination">
                    <li
                      class={`paginate_button page-item previous ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                      id="example2_previous"
                    >
                      <Link
                        onClick={() => handlePageChange(currentPage - 1)}
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="0"
                        tabindex="0"
                        class="page-link"
                      >
                        Anterior
                      </Link>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                      <li
                        key={index}
                        className={`paginate_button page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => handlePageChange(index + 1)}
                          className="page-link"
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      class={`paginate_button page-item next ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                      id="example2_next"
                    >
                      <Link
                        onClick={() => handlePageChange(currentPage + 1)}
                        href="#"
                        aria-controls="example2"
                        data-dt-idx="7"
                        tabindex="0"
                        class="page-link"
                      >
                        Siguiente
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaVivienda;
