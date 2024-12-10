import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HouseIcon from "@mui/icons-material/House";
import LayersIcon from "@mui/icons-material/Layers";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { useNavigate } from "react-router";

export default function MainListItems() {

    console.log("ESTE ES EL MENU")
    let navigate = useNavigate();
    return (
        <div>
            <ListItem button onClick={() => navigate("/dc")}>
                <ListItemIcon>
                    <DashboardIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button onClick={() => navigate("/orders")}>
                <ListItemIcon>
                    <ShoppingCartIcon color="primary"  />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItem>

            <ListItem button to onClick={() => navigate("/dc/houses")}>
                <ListItemIcon>
                    <HouseIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Mis casas" />
            </ListItem>

            {/*
      <ListItem button onClick={() => history.push("/departments")}>
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Mis Departamentos" />
      </ListItem>
  */}
            <ListItem button onClick={() => navigate("/inquilinos")}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Mi inquilinos" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItem>
        </div>
    );
}

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Reportes</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Facturas" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);
