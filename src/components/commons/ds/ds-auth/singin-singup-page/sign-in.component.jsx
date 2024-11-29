import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material";

import { useDispatch } from "react-redux";

//import { actions as authActions } from "../../../../../redux/auth/auth-reducer";

import DSButtonComponent from "../../ds-button/ds-button.component";
import DSFormInputComponent from "../../ds-input/ds-input.component";
import { useHistory } from "react-router-dom";
import { signInWithEmailPassword } from "../../../../../redux/authSlice";

const SignInComponent = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email sin formato correcto")
        .required("Campo requerido"),
      password: Yup.string()
        .min(4, "Password must be at least 6 characters")
        .required("Campo requerido"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(
        signInWithEmailPassword({
          email: values.email,
          password: values.password,
          history,
        })
      );
    },
  });

  const googleFailure = (error) => {
    console.log("GOOGLE: error", error);
  };

  return (
    <div className="sign-in-up-page">
      <div className="title">
        <h2>Tengo una cuenta</h2>
        <span>Ingresa con tu email y clave</span>
      </div>

      <form className="content" onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <DSFormInputComponent
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            label="Email"
            autoFocus
          />

          <DSFormInputComponent
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
          />
        </Grid>

        <div className="buttons">
          <DSButtonComponent type="submit">Ingresar</DSButtonComponent>
        </div>
        {false && (
          <>
            <div className="text-divider">o </div>
            <div className="buttons"></div>

            <div className="text-divider">o Firebase</div>

            <div className="buttons-sn"></div>
          </>
        )}
      </form>
    </div>
  );
};

export default SignInComponent;
