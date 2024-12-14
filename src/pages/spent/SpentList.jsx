import { Container, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MONTHS } from "../../utils/generalUtils";
import { Selector } from "../../components/commons/wc/Selector";
import DSButtonComponent from "../../components/commons/ds/ds-button/ds-button.component";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { loadSpentsList } from "../../redux/spentSlice";

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
    return (
      <div>
        <Selector
          id="year"
          label="Select a year"
          value={filter.year}
          handleChange={(e) => {
            setFilter({ ...filter, year: e.target.value });
          }}
          data={years}
        />

        <Selector
          id="month"
          label="Select a month"
          value={filter.month}
          handleChange={(e) => {
            setFilter({ ...filter, month: e.target.value });
          }}
          data={MONTHS}
        />

        <DSButtonComponent onClick={filterData}>Filtrar</DSButtonComponent>

        {spentList.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Container fixed>
        <h3>SPENTS</h3>
        {renderFilters()}

        <Fab
          style={{
            position: "fixed",
            bottom: 60,
            right: 60,
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
