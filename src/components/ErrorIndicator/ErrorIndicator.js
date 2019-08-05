import React from "react";
import img from "./error-image.png";
import "./ErrorIndicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={img} alt="error" />
      <span>Something is wrong!</span>
      <span>We will fix it soon</span>
    </div>
  );
};

export default ErrorIndicator;
