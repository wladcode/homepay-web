//import clsx from 'clsx';
import React from "react";
import { ContainerApp } from "./css/LayoutPay-styled.css";
import { Outlet } from "react-router";

function LayoutPublic() {
  return (
    <>
      <ContainerApp maxWidth="lg">
        <main>
          <Outlet />
        </main>
      </ContainerApp>
    </>
  );
}

export default LayoutPublic;
