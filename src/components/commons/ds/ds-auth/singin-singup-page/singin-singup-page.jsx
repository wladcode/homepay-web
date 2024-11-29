import { Tab, Tabs, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//import { selectCurrentUser } from "../../../../../redux/user/user-selector";
import { isUserLoggedIn } from "./../../../../../api/util";
import "./css/singin-singup.scss";

import SignUpComponent from "./sign.up.component";
import SignInComponent from "./sign-in.component";

function SingUnSingUpPage() {
    const [value, setValue] = useState(0);
    const currentUser = null //useSelector(selectCurrentUser);
    const history = useHistory();

    useEffect(() => {
        console.log("USER IN PAGE STORE : ", currentUser);
        if (isUserLoggedIn(currentUser)) {
            console.log("USER IN PAGE STORE : ", currentUser);
            history.push("/dc");
        } else {
            console.log("USAUARIO NO LOGEADO");
        }
    }, [currentUser]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
                <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="icon label tabs example">
                    <Tab label="Login" />
                    <Tab label="Registro" />
                </Tabs>
            </Box>

            {value === 0 ? <SignInComponent /> : <SignUpComponent />}
        </>
    );
}

export default SingUnSingUpPage;
