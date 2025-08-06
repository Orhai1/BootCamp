import React, { useState } from "react";
import Landing from "./components/Landing";
import Home from "./components/Home";

const App = () => {
  const [state, setState] = useState( {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: true,
    currentPage: "Landing"
  });
  const ChangePage = (page) => {
    setState((prev) => ({ ...prev, currentPage: page }));
  };

  return (

    // //ex2
    // <div>
    //     <Landing user={state.user} store={state.store} />
    //     <Home store={state.store} />
      
    // </div>


    //ex3 + ex4
    <>
      <div>
        <button onClick={() => ChangePage("landing")}>Landing</button>
        <button onClick={() => ChangePage("home")}>Home</button>
      </div>

      {state.currentPage === "landing" ? (
        <Landing user={state.user} store={state.store} />
      ) : (
        <Home store={state.store} shouldDiscount={state.shouldDiscount} />
      )}
    </>
  );
};

export default App;
