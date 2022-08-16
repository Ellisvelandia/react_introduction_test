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
        <button onClick={incrementNum}>
          <span className="mas">Increment</span>
        </button>
        <button onClick={decrementNum}>
          <span className="mas">Decrement</span>
        </button>
      </div>
    </>
  );
};

export default App;
