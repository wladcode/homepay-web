import { Grid, TextField } from "@mui/material";
import { func, shape, string } from "prop-types";
import React from "react";
import "./ds-input.scss";

const DSFormInputFormikComponent = ({ label, field, form: { touched, errors }, ...otherProps }) => {
    return (
        <Grid item xs={12} sm={12}>
            <TextField
                {...field}
                label={label}
                required
                fullWidth
                size="small"
                margin="dense"
                InputLabelProps={{
                    shrink: true,
                }}
                error={errors[field.name] ? true : false}
                helperText={errors[field.name] ? errors[field.name] : ""}
                {...otherProps}
            />
        </Grid>
    );
};

DSFormInputFormikComponent.propTypes = {
    label: string.isRequired,
    field: shape({}).isRequired,
    form: shape({}).isRequired,
};

export default DSFormInputFormikComponent;
