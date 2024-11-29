import { CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { bool } from "prop-types";
import React from "react";
import "./ds-loader.scss";
import { useSelector } from "react-redux";

function DSLoader() {
  const showLoader = useSelector((state) => state.loader.show);
  console.log("showLoader ", showLoader);

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={showLoader}
      >
        <CircularProgress color="inherit" />
        Cargando ...
      </Backdrop>
    </>
  );
}

export default DSLoader;
