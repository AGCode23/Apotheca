import React, { useState } from "react";
import styles from "./MobileNavBar.module.css";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.mobileNavbar}>
      <div className={styles.hamburgerMenu} onClick={toggleNavbar}>
        <div
          className={
            isOpen
              ? `${styles.hamburgerIcon} ${styles.open}`
              : styles.hamburgerIcon
          }
        ></div>
      </div>
      {isOpen && (
        <div className={`${styles.navLinks} ${styles.open}`}>
          {/* Your navigation links here */}
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
