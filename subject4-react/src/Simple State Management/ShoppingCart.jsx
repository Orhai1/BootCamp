import React, { useReducer } from "react";
import { cartReducer } from "./cartReducer";

function ShoppingCart() {
   const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        total: 0,
        itemCount: 0,
      });

  return (
    <div>
      <h2>
        Shopping Cart ({state.itemCount} items) - Total: ${state.total}
      </h2>

      <div>
        <button
          onClick={() =>
            dispatch({ type: "ADD_ITEM", data: { name: "Orange", price: 10 } })
          }
        >
          Add Orange
        </button>
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear Cart
        </button>
      </div>

      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} — ${item.price}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", data: item.id })}>
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;