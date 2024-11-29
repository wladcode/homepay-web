import React from "react";
import "./home-page.scss";
import SingUnSingUpPage from "./../../components/commons/ds/ds-auth/singin-singup-page/singin-singup-page";
import "./home-page.scss";
function Home() {
  return (
    <div className="home-page">
      <div className="sign-in-and-sign-up">
        <div className="info-banner">
          <div className="info">
            <p>Bienvenido al sistema de gestion de condominios</p>

            <p>
              Cree una cuenta y empiece la administración de su condomio, casa o
              departamento
            </p>
          </div>
        </div>
        <div className="login-logup">
          <SingUnSingUpPage />
        </div>
      </div>
    </div>
  );
}

export default Home;
