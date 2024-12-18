import { Box, Container, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MONTHS } from "../../utils/generalUtils";
import { Selector } from "../../components/commons/wc/Selector";
import DSButtonComponent from "../../components/commons/ds/ds-button/ds-button.component";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { loadSpentsList } from "../../redux/spentSlice";
import SpentItem from "./SpentItem";
import Grid from "@mui/material/Grid2";
import CalendarNavBar from "../../components/commons/wc/CalendarNavBar";

export const SpentList = (props) => {
  const dispatch = useDispatch();
  const spentList = useSelector((state) => state.spent.spentList);
  const [filter, setFilter] = useState({ year: 2024, month: 1 });

  console.log("spentList ", spentList);

  useEffect(() => {
    console.log("SOLO UNA VEZ ", filter);

    dispatch(loadSpentsList({ year: filter.year, month: filter.month }));
  }, []);

  const years = [
    {
      id: "2024",
      label: "2024",
    },
    {
      id: "2025",
      label: "2025",
    },
  ];

  const filterData = () => {
    console.log("filter", filter);

    dispatch(loadSpentsList({ year: filter.year, month: filter.month }));
  };

  const renderFilters = () => {
    return <CalendarNavBar />;
  };

  const renderListData = () => {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={1} justifyContent="center">
          {spentList.map((item, index) => (
            <Grid item key={index}>
              <SpentItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <div>
      <Container fixed>
        <h3>SPENTS</h3>
        {renderFilters()}
        {renderListData()}

        <Fab
          style={{
            position: "fixed",
            bottom: 60,
            right: 30,
            textAlign: "center",
          }}
          size="small"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Container>
    </div>
  );
};
