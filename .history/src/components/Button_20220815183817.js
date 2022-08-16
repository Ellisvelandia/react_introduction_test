import React from "react";
import "./Button.scss"

const Button = () => {


  
  
  return (
    <div>
      <button class="tip-button">
        <span class="tip-button__text">Send me a tip</span>
        <div class="coin-wrapper">
          <div class="coin">
            <div class="coin__middle"></div>
            <div class="coin__back"></div>
            <div class="coin__front"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button;
