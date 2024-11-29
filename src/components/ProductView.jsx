import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/pizzaSlice";

function ProductView(props) {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {pizza.loading && <h3>Loading...</h3>}
      {!pizza.loading && pizza.error && <h3>Error {pizza.error}</h3>}
      {!pizza.loading && pizza.products && (
        <div>
          {pizza.products.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ProductView.propTypes = {};

export default ProductView;
