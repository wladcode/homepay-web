import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import clsx from "clsx";
import React from "react";
//import Chart from './Chart';
//import Deposits from './Deposits';
//import Orders from './Orders';
//import { makeStyles, withStyles } from "tss-react/mui";

/*const useStyles = makeStyles()((theme) => ({
    root: {
        display: "flex",
    },

    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 240,
    },
}));
*/

export default function Dashboard() {
    //const { classes } = useStyles();
    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
             Chart 
            <Grid item xs={12} md={8} lg={9}>
                <Paper >{/*<Chart />*/}</Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper >{/*<Deposits />*/}</Paper>


                
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper >{/*<Orders />*/}</Paper>
            </Grid>
        </Grid>
    );
}
