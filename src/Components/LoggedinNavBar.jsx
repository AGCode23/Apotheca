import React from "react";
import styles from "./LoggedInNavbar.module.css";
import { Link } from "react-router-dom";
import { auth } from "../Config/Config"; // Import Firebase auth

const LoggedInNavbar = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error.message);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Your Logo</Link>
      </div>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
