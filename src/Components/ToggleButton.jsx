import React, { useState } from "react";
import "./ToggleButton.css";

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  return (
    <div className="button-container-blog">
      <div className="dropdown-blog">
        <button
          className="dropbtn"
          onClick={toggleDropdown}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
        >
          <h4>All Topics</h4>
        </button>
        {isOpen && (
          <div className="dropdown-content-blog">
            <a href="/blog">Option 1</a>

            <a href="/blog">Option 2</a>

            <a href="/blog">Option 3</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownButton;
