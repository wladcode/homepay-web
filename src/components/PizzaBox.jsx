import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { order_pizza } from "../redux/pizzaSlice";

function HooksPizzaBox() {
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text">Pizza Base available - {pizzaBase}</h2>
      <button className="btn" onClick={() => dispatch(order_pizza())}>
        Order pizza
      </button>
    </div>
  );
}

export default HooksPizzaBox;
