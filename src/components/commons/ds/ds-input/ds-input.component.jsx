import { Grid, TextField } from "@mui/material";
import { func, string } from "prop-types";
import React from "react";
import "./ds-input.scss";

const DSFormInputComponent = ({ name, value, label, handleChange, ...otherProps }) => {
    return (
        <Grid item xs={12} sm={12}>
            <TextField
                id={name}
                name={name}
                value={value}
                label={label}
                required
                fullWidth
                size="small"
                error={value === "" ? true : false}
                margin="dense"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange}
                {...otherProps}
            />
        </Grid>
    );
};

DSFormInputComponent.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    label: string.isRequired,
    handleChange: func.isRequired,
};

export default DSFormInputComponent;