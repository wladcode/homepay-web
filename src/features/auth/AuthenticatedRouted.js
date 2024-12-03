import { string } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
//import DepartDetail from "../../components/department/depart-detail";
//import Department from "../../components/department/Department";
//import House from "../../components/house/House";
//import { selectors as authSelectors } from "./../../redux/auth/auth-reducer";
import Dashboard from "../../pages/Dashboard";
import LayoutPay from "../../components/layout/LayoutPay";
import { useNavigate } from "react-router";

const AuthenticatedRouted = ({ path }) => {
  const userData = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  let hasActiveSession = false;
  if (userData) {
    console.log("userData", userData);
    hasActiveSession = true;
  } else {
    console.log("debe redirigir a login");
    navigate("/");
  }
  console.log("hasActiveSession ", hasActiveSession);

  console.log("THIS:path ", path);

  return (
    <Route element={<LayoutPay />}>
      <Route index path={`${path}`} component={Dashboard} />
      <Route path={`${path}/houses`} component={Dashboard} />
      <Route path={`${path}/departments`} component={Dashboard} />
      <Route path={`${path}/departments/details`} component={Dashboard} />
    </Route>
  );
};

AuthenticatedRouted.propTypes = {
  path: string.isRequired,
};

export default AuthenticatedRouted;
