import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customer_choice } from "../redux/pizzaSlice";

function CustomerChoose() {
  const [number, setNumber] = useState(1);
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text">Pizza Base available - {pizzaBase}</h2>
      <input
        type="text"
        className="input-field"
        placeholder="Enter your nane"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn" onClick={() => dispatch(customer_choice(number))}>
        Order pizza
      </button>
    </div>
  );
}

export default CustomerChoose;
