import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CustomerChoose from "./components/CustomerChoose";
import Home from "./pages/home/Home";
import DSLoader from "./components/commons/ds/ds-loader/ds-loader";
import DSMessage from "./components/commons/ds/ds-messages/ds-message";

function App() {
  return (
    <Provider store={store}>
      <DSLoader />
      <DSMessage />
      <>
        {<CustomerChoose />}
        {/*<PizzaBox />
      <BurgerBox />
      */}
        {/*<ProductView />*/}

        {<Home />}
      </>
    </Provider>
  );
}

export default App;
