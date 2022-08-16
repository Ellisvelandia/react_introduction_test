import "./App.scss";
import React, { useState } from "react";

const App = () => {
  const [num, changeNum] = useState(0);

  const incrementNum = () => {
    changeNum(num + 2);
  };

  const decrementNum = () => {
    if (num - 1 < 0) {
      alert(`you can't decrease than 0`);
    } else {
      changeNum(num - 2);
    }
  };

  return (
    <>
      <div className="container">
        <h1>{num}</h1>
        <button class onClick={incrementNum}>Increment</button>
        <button onClick={decrementNum}>Decrement</button>
      </div>
    </>
  );
};

export default App;
