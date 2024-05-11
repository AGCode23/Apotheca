import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { auth } from "../Config/Config";
import { useNavigate } from "react-router-dom";

function LoginPage({ isOpen, close }) {
  const navigate = useNavigate();
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const loginuser = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(useremail, userpassword)
      .then((auth) => {
        navigate("/");
        handleClose();
      })
      .catch((e) => alert(e.message));
  };

  const signupuser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(useremail, userpassword)
      .then((auth) => {
        navigate("/");
        handleClose();
      })
      .catch((e) => alert(e.message));
  };

  const [page, setPage] = useState("login");
  const [isVisible, setVisible] = useState(false);

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
                value={useremail}
                onChange={(event) => setUserEmail(event.target.value)}
                type="email"
                className={styles.formLogin}
                placeholder="Email address"
              />
              <input
                value={userpassword}
                onChange={(event) => setUserPassword(event.target.value)}
                type="password"
                className={styles.formLogin}
                placeholder="Password"
              />
              <button onClick={loginuser} className={styles.loginButtonStyles}>
                Sign In
              </button>
            </div>
          </div>
          <div className={styles.modalPage}>
            <div className={styles.containerForLogin}>
              <h2>Sign up for free!</h2>
              <input
                value={useremail}
                onChange={(event) => setUserEmail(event.target.value)}
                type="email"
                className={styles.formLogin}
                placeholder="Email address"
              />
              <input
                value={userpassword}
                onChange={(event) => setUserPassword(event.target.value)}
                type="password"
                className={styles.formLogin}
                placeholder="Password"
              />
              <input
                type="password"
                className={styles.formLogin}
                placeholder="Confirm Password"
              />
              <button onClick={signupuser} className={styles.loginButtonStyles}>
                Sign Up
              </button>
              <h3>By clicking Sign up, you agree to the terms of use.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;