import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CustomerChoose from "./components/CustomerChoose";
import Home from "./pages/home/Home";
import DSLoader from "./components/commons/ds/ds-loader/ds-loader";
import DSMessage from "./components/commons/ds/ds-messages/ds-message";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import BurgerBox from "./components/BurgerBox";
import HooksPizzaBox from "./components/PizzaBox";
import ProductView from "./components/ProductView";
import LayoutPublic from "./components/layout/LayoutPublic";
import LayoutPay from "./components/layout/LayoutPay";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { SpentList } from "./pages/spent/SpentList";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DSLoader />
        <DSMessage />

        <BrowserRouter>
          <Routes>
            <Route element={<LayoutPublic />}>
              <Route index element={<Home />} />
            </Route>

            <Route path="dc" element={<LayoutPay />}>
              <Route index element={<Dashboard />} />
              <Route path="spents" element={<SpentList/>} />
              <Route path={`houses`} element={<Dashboard />} />
              <Route path={`departments`} element={<Dashboard />} />
              <Route path={`departments/details`} element={<Dashboard />} />
            </Route>

            <Route path="/customer" element={<CustomerChoose />} />
            <Route path="/pizza" element={<HooksPizzaBox />} />
            <Route path="/burger" element={<BurgerBox />} />
            <Route path="/product" element={<ProductView />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
