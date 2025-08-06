import React from "react";
import Item from "./Item";

const Home = ({ store, shouldDiscount }) => {
  return (
    <div>
      <h3>Store</h3>
      {store.map((i) => (
        <Item item={i} shouldDiscount={shouldDiscount} />
      ))}
    </div>
  );
};

export default Home;
