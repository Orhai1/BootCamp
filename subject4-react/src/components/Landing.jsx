import React from "react";

const Landing = ({ user, store }) => {
  const hottestItem = store.find(item => item.hottest);

  return (
    <div>
      Welcome, {user}. The hottest item is {hottestItem.item} for ${hottestItem.price}
    </div>
  );
};

export default Landing;
