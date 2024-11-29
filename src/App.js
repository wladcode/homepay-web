import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CustomerChoose from "./components/CustomerChoose";
import ProductView from "./components/ProductView";

function App() {
  return (
    <Provider store={store}>
      <>
        {<CustomerChoose />}
        {/*<PizzaBox />
      <BurgerBox />
      */}
        {<ProductView />}
      </>
    </Provider>
  );
}

export default App;
