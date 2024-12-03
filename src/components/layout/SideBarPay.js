import { ChevronLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { bool, func } from "prop-types";
import React, { useEffect, useState } from "react";
//import { makeStyles } from "@mui/styles/makeStyles";
import MainListItems, { secondaryListItems } from "./listItems";

const drawerWidth = 240;
/*
const useStyles = makeStyles()((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },

    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: 75,
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },

    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
}));
*/

function SideBarPay({ openDrawer, handleDrawerClose }) {
    //const { classes } = useStyles();

    const [interOpenDrawer, setInterOpenDrawer] = useState(openDrawer);

    useEffect(() => {
        console.log("USE EFFECT: ", openDrawer);
        setInterOpenDrawer(openDrawer);
    }, [openDrawer]);

    const toggleDrawer = (event) => {
        console.log("CLIC ->", event.type);

        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setInterOpenDrawer(false);
        handleDrawerClose(false);
    };

    return (
        <div>
            <Drawer anchor="left" open={interOpenDrawer} onClose={toggleDrawer}>
                <div id="toolbar" >
                    <IconButton onClick={toggleDrawer} size="large">
                        <ChevronLeft />
                    </IconButton>
                    Icono
                </div>
                <Divider />
                <div onClick={toggleDrawer}>
                    <List>
                        <MainListItems />
                    </List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </div>
            </Drawer>
        </div>
    );
}

SideBarPay.propTypes = {
    openDrawer: bool.isRequired,
    handleDrawerClose: func.isRequired,
};

export default SideBarPay;
