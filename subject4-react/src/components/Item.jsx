import React from "react";

const Item = ({ item, shouldDiscount }) => {
  const newPrice = shouldDiscount
    ? item.price * (1 - item.discount)
    : item.price;

  return (
    <div>{item.item}: ${newPrice}</div>
  );
};

export default Item;
