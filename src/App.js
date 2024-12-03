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
import AuthenticatedRouted from "./features/auth/AuthenticatedRouted";
import LayoutPay from "./components/layout/LayoutPay";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <DSLoader />
      <DSMessage />

      <BrowserRouter>
        <Routes>
          <Route element={<LayoutPublic />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/dc" element={<LayoutPay />}>
            <Route index component={<Dashboard />} />
            <Route path={`houses`} component={<Dashboard />} />
            <Route path={`departments`} component={<Dashboard />} />
            <Route path={`departments/details`} component={<Dashboard />} />
          </Route>

          <Route path="/customer" element={<CustomerChoose />} />
          <Route path="/pizza" element={<HooksPizzaBox />} />
          <Route path="/burger" element={<BurgerBox />} />
          <Route path="/product" element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
