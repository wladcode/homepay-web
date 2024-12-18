import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { format, addDays, subDays, getYear, getMonth } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { useTheme } from "@mui/material/styles";
import DSButtonComponent from "../ds/ds-button/ds-button.component";
import { useDispatch } from "react-redux";
import { loadSpentsList } from "../../../redux/spentSlice";

const CalendarNavBar = () => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detect small screens

  // Generate 7 consecutive days, starting with the current date
  const generateDays = (startDate) => {
    return Array.from({ length: 7 }, (_, index) => addDays(startDate, index));
  };

  const handlePrevDay = () => {
    setCurrentDate((prev) => subDays(prev, 1)); // Navigate to the previous day
  };

  const handleNextDay = () => {
    setCurrentDate((prev) => addDays(prev, 1)); // Navigate to the next day
  };

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
    setShowDatePicker(false); // Close the calendar after selection
  };

  useEffect(() => {
    const year = getYear(currentDate);
    const month = getMonth(currentDate) + 1;

    console.group("iN USE EFFECT");
    console.log("currentDate ", currentDate);
    console.log("year ", year);
    console.log("month ", month);
    console.groupEnd();
    dispatch(
      loadSpentsList({
        year,
        month,
      })
    );
  }, [currentDate, dispatch]);

  const days = generateDays(currentDate);

  const renderMobile = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          padding: 2,
          bgcolor: "background.paper",
        }}
      >
        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            gap: 1,
          }}
        >
          <DSButtonComponent variant="outlined" onClick={handlePrevDay}>
            Previous Day
          </DSButtonComponent>

          <DSButtonComponent variant="outlined" onClick={handleNextDay}>
            Next Day
          </DSButtonComponent>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            bgcolor: "primary.light",
            borderRadius: 1,
            boxShadow: 1,
            padding: 1,
          }}
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <Typography variant="h6" textAlign="center">
            {format(currentDate, "MMMM yyyy")}
          </Typography>
          <Typography variant="subtitle1">
            {format(currentDate, "EEE")} - {format(currentDate, "dd")}
          </Typography>
        </Box>
      </Box>
    );
  };

  const renderDesktop = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          padding: 2,
          bgcolor: "background.paper",
        }}
      >
        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "row",
            gap: 1,
          }}
        >
          <DSButtonComponent
            variant="outlined"
            onClick={handlePrevDay}
            sx={{ width: "auto" }}
          >
            Previous Day
          </DSButtonComponent>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "auto",
              bgcolor: "primary.light",
              borderRadius: 1,
              boxShadow: 1,
              padding: 1,
            }}
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <Typography variant="h6" textAlign="center">
              {format(currentDate, "MMMM yyyy")}
            </Typography>
            <Typography variant="subtitle1">
              {format(currentDate, "EEE")} - {format(currentDate, "dd")}
            </Typography>
          </Box>

          <DSButtonComponent
            variant="outlined"
            onClick={handleNextDay}
            sx={{ width: "auto" }}
          >
            Next Day
          </DSButtonComponent>
        </Box>
      </Box>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {isSmallScreen ? renderMobile() : renderDesktop()}

      {showDatePicker && (
        <Box sx={{ marginTop: 2 }}>
          <DateCalendar value={currentDate} onChange={handleDateChange} />
        </Box>
      )}
    </LocalizationProvider>
  );
};

export default CalendarNavBar;
