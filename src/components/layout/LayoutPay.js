//import clsx from 'clsx';
import React, { useEffect, useState } from "react";
import { ContainerApp } from "./css/LayoutPay-styled.css";
import FooterPay from "./FooterPay";
import HeaderPay from "./HeaderPay";
import SideBarPay from "./SideBarPay";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LayoutPay = () => {
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.auth.currentUser);

  console.log("currentUser", currentUser);

  useEffect(() => {
    console.log("currentUser", currentUser);
    if (!currentUser) {
      console.log("debe redirigir a login");
      navigate("/");
      console.log("despues de navigate");
    }
  }, [navigate, currentUser]);

  ///const [userData, setUserData] = useState(props.user);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    console.log("openDrawer", openDrawer);
    setOpenDrawer(!openDrawer);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(!openDrawer);
  };

  console.log("pasa a return");

  if (currentUser) {
    return (
      <>
        <ContainerApp maxWidth="lg" sx={{ bgcolor: "background.paper" }}>
          <HeaderPay
            openDrawer={openDrawer}
            handleDrawerOpen={handleDrawerOpen}
          />
          <SideBarPay
            openDrawer={openDrawer}
            handleDrawerClose={handleDrawerClose}
          />
          <main>
            <Outlet />
          </main>
          <FooterPay />
        </ContainerApp>
      </>
    );
  }
  return <></>;
};

export default LayoutPay;
