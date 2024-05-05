import React from "react";

const IconContainer = ({ src, alt, className = "" }) => (
  <div className={`icon-container ${className}`}>
    <img src={src} alt={alt} />
  </div>
);

export default IconContainer;
