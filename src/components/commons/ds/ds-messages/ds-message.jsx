import React from "react";

import { Snackbar } from "@mui/material";

import Alert from "@mui/material/Alert";
import { func, shape } from "prop-types";
import {
  setErrorMessage,
  setSuccessMessage,
} from "../../../../redux/messageSlice";
import { useDispatch, useSelector } from "react-redux";

const DSMessage = () => {
  const errorMessage = useSelector((state) => state.message.errorMessage);
  const successMessage = useSelector((state) => state.message.successMessage);
  const dispatch = useDispatch();

  console.log("ERROR: ", errorMessage);
  const closeSnackBarSucceFul = () => {
    dispatch(
      setSuccessMessage({
        show: false,
        message: "",
      })
    );
  };

  const closeSnackBarError = () => {
    dispatch(
      setErrorMessage({
        show: false,
        message: "",
      })
    );
  };

  return (
    <>
      <Snackbar
        open={successMessage.show}
        autoHideDuration={4000}
        onClose={() => closeSnackBarSucceFul()}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => closeSnackBarSucceFul()} severity="success">
          {successMessage.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorMessage.show}
        autoHideDuration={6000}
        onClose={() => closeSnackBarError()}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => closeSnackBarError()} severity="error">
          {errorMessage.message}
        </Alert>
      </Snackbar>
    </>
  );
};

DSMessage.propTypes = {
  successMessage: shape({}).isRequired,
  errorMessage: shape({}).isRequired,
  setErrorMessage: func.isRequired,
  setSuccesMessage: func.isRequired,
};

export default DSMessage;
