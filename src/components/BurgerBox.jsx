import React from "react";
import { connect } from "react-redux";
import { burger_order } from "../redux/burgerSlice";

function BurgerBox({ burgerBuns, orderBurger }) {
  return (
    <div className="container">
      <h2 className="text">Burger buns available - {burgerBuns}</h2>
      <button className="btn" onClick={orderBurger}>
        Order Burger
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBuns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: () => dispatch(burger_order()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
