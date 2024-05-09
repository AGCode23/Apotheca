// LoginPage.js

import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { auth } from "../Config/Config"; // Import Firebase auth

function LoginPage({ isOpen, close }) {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    document
      .querySelector(`.${styles.modalOverlay}`)
      .classList.add(styles.fadeOut);
    setTimeout(() => {
      setVisible(false);
      close();
    }, 500); // This timeout should match the fadeOut animation duration
  };

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("User signed in successfully");
      handleClose(); // Close the modal after successful login
    } catch (error) {
      setError(error.message);
      console.error("Error signing in:", error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      handleClose(); // Close the modal after successful signup
    } catch (error) {
      setError(error.message);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.navTabs}>
          <button
            className={`${styles.tab} ${
              page === "login" ? styles.activeTab : ""
            }`}
            onClick={() => setPage("login")}
          >
            Sign In
          </button>
          <button
            className={`${styles.tab} ${
              page === "signup" ? styles.activeTab : ""
            }`}
            onClick={() => setPage("signup")}
          >
            Sign Up
          </button>
        </div>
        <div
          className={styles.modalPageContainer}
          style={{ transform: `translateX(${page === "login" ? 0 : -400}px)` }}
        >
          <div className={styles.modalPage}>
            <div className={styles.containerForLogin}>
              <h2>Welcome Back!</h2>
              <input
                type="email"
                className={styles.formLogin}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className={styles.formLogin}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.loginButtonStyles} onClick={handleLogin}>
                Sign In
              </button>
              {error && <p className={styles.error}>{error}</p>}
            </div>
          </div>
          <div className={styles.modalPage}>
            <div className={styles.containerForLogin}>
              <h2>Sign up for free!</h2>
              <input
                type="email"
                className={styles.formLogin}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className={styles.formLogin}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className={styles.formLogin}
                placeholder="Confirm Password"
              />
              <button className={styles.loginButtonStyles} onClick={handleSignup}>
                Sign Up
              </button>
              <h3>By clicking Sign up, you agree to the terms of use.</h3>
              {error && <p className={styles.error}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
