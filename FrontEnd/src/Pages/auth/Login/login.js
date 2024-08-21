import React from "react";
import { Link } from "react-router-dom";
import "./Logins.css";
import myImg from "../../../img/logo2.png";

const LoginAdministrador = () => {
  return (
    <div className="login-administrador">
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <img src={myImg} alt="Logo" className="logo" />
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">LOGIN ADMINISTRADOR</p>

              <form action="MainAdmin">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Recuerdame</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-danger btn-block">
                      Ingresar
                    </button>
                  </div>
                </div>
              </form>

              <p className="mb-1">
                <Link to="/forgot-password">¿Has olvidado tu contraseña?</Link>
              </p>
              <p className="mb-0">
                ¿Desea ingresar como <Link to="/LoginPropietario">Propietario</Link> o{" "}
                <Link to="/LoginPortero">Portero</Link>?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdministrador;
