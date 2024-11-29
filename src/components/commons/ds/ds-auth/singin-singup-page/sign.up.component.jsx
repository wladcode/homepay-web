import { Grid } from "@mui/material";
import React, { Component } from "react";
import DSFormInputComponent from "../../ds-input/ds-input.component";
import DSButtonComponent from '../../ds-button/ds-button.component';

class SignUpComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("El password no coincide");
            return;
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { fullname, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-in-up-page">
                <div className="title">
                    <h2>No tengo una cuenta</h2>
                    <span>Registrate con tu email y clave</span>
                </div>

                <form className="content" onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <DSFormInputComponent
                            name="fullname"
                            value={fullname}
                            label="Nombre"
                            required
                            handleChange={this.handleChange}
                            autoFocus
                        />
                        <DSFormInputComponent
                            name="email"
                            value={email}
                            required
                            handleChange={this.handleChange}
                            label="Email"
                        />

                        <DSFormInputComponent
                            name="password"
                            value={password}
                            required
                            handleChange={this.handleChange}
                            label="Password"
                        />

                        <DSFormInputComponent
                            name="confirmPassword"
                            value={confirmPassword}
                            required
                            handleChange={this.handleChange}
                            label="Confirme la password"
                        />
                    </Grid>

                    <div className="buttons">
                        <DSButtonComponent type="submit">Registrarse</DSButtonComponent>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpComponent;
