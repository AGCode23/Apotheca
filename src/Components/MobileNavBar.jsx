// MobileNavbar.js

import React, { useState } from "react";
import styles from "./MobileNavBar.module.css";
import { Link } from "react-router-dom";
import { auth } from "../Config/Config"; // Import Firebase auth

const MobileNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Optionally, redirect the user to another page after logout
      // window.location.href = '/'; // Example: Redirect to the homepage
    } catch (error) {
      console.error("Error signing out:", error.message);
      // Handle error (e.g., display error message to user)
    }
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
