import "./App.css";
import Button  from "./components/Button";
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
      <h1>{num}</h1>
      <Button
      onClick={incrementNum}Increment/>
      
      <button onClick={decrementNum}>Decrement</button>
    </>
  );
};

export default App;
