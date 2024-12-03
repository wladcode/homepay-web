import React from "react";
import DSButtonComponent from "../../ds-button/ds-button.component";
import DSFormInputComponent from "../../ds-input/ds-input.component";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const SignUpComponent = () => {
  console.log("POR ACA");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      /*dispatch(
        signInWithEmailPassword({
          email: values.email,
          password: values.password,
          history,
        })
      );*/
    },
  });

  return (
    <div className="sign-in-up-page">
      <div className="title">
        <h2>No tengo una cuenta</h2>
        <span>Registrate con tu email y clave</span>
      </div>

      <form className="content" onSubmit={formik.handleSubmit}>
        <DSFormInputComponent
          name="fullname"
          value={formik.values.fullname}
          label="Nombre"
          required
          autoFocus
        />
        <DSFormInputComponent
          name="email"
          value={formik.values.email}
          required
          label="Email"
        />

        <DSFormInputComponent
          name="password"
          value={formik.values.password}
          required
          label="Password"
        />

        <DSFormInputComponent
          name="confirmPassword"
          value={formik.values.confirmPassword}
          required
          label="Confirme la password"
        />

        <div className="buttons">
          <DSButtonComponent type="submit">Registrarse</DSButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
