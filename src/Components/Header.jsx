import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {
  CartIcon,
  Logo,
  PharmLogo,
  ProfLogo,
  WishLogo,
} from "../Assets/Images/index";
import LoginPage from "./LoginPage";

const Header = () => {
  // To redirect to pharmassist page
  const handleClick = () => {
    window.location.href = "/pharmassist";
  };

  const handleClickHome = () => {
    window.location.href = "/";
  };

  // For search but placeholder for the meantime
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // For auth modal
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  // For hamburger button
  const [isOpenNav, setIsOpenNav] = useState(false);
  const toggleNavbar = () => {
    setIsOpenNav(!isOpenNav);
  };
  return (
    <header>
      {/* Starts the code by indicating the home grid */}
      <div className={styles.homeGrid}>
        {/* Primary nav */}
        <div className={styles.headerPrimaryNav}>
          {/* Container for logo */}
          <div
            className={styles.apothecaLogo}
            role="button"
            tabIndex={0}
            onClick={handleClickHome}
          >
            <div className={styles.homeLogoContainer}>
              <img src={Logo} alt="logo" height={75} />
              {/* To wrap the title and tagline */}
              <div className={styles.apothecaTitle}>
                <h2>Apotheca</h2>
                <h3>Online Medical Store</h3>
              </div>
            </div>
          </div>

          {/* Search container */}
          <div className={styles.enclosingForResponsive}>
            <nav className={styles.mobileNavbar}>
              <div className={styles.hamburgerMenu} onClick={toggleNavbar}>
                <div
                  className={
                    isOpenNav
                      ? `${styles.hamburgerIcon} ${styles.open}`
                      : styles.hamburgerIcon
                  }
                ></div>
              </div>
            </nav>
            <div className={styles.headerSearch}>
              {/* Visually hidden label for accessibility */}
              <label htmlFor="searchInput">Search:</label>
              <input
                type="text"
                id="searchInput"
                name="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search here ..."
              />
            </div>
            {/* Button container */}
            <div className={styles.headerButtonContainer}>
              <div
                className={styles.pharmAssistButton}
                role="button"
                tabIndex={0}
                onClick={handleClick}
              >
                <div className={styles.pharmLogo}>
                  <img src={PharmLogo} alt="PharmLogo" height={20} />
                </div>
                <div className={styles.pharmAssist}>
                  <h3>PharmAssist</h3>
                </div>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.toHideElement}`}
              >
                <img src={WishLogo} alt="wishlist" />
              </div>
              <div className={styles.iconContainer}>
                <img className={styles.cartIcon} src={CartIcon} alt="cart" />
              </div>
              {/* Account section */}
              <div className={styles.headerAuth}>
                <h2>Account</h2>
                <h3>
                  <button onClick={toggleModal} className={styles.authButton}>
                    Login/Signup
                  </button>
                </h3>
                <LoginPage isOpen={isOpen} close={toggleModal} />
              </div>
              <div className={styles.iconContainer}>
                <img src={ProfLogo} alt="profile-logo" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerSubNav}>
          <h2>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.notActive
              }
            >
              Home
            </NavLink>
          </h2>
          <h2>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive ? styles.active : styles.notActive
              }
            >
              Categories
            </NavLink>
          </h2>
          <h2>
            <NavLink
              to="/generic"
              className={({ isActive }) =>
                isActive ? styles.active : styles.notActive
              }
            >
              Apotheca Generics
            </NavLink>
          </h2>
          <h2>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? styles.active : styles.notActive
              }
            >
              Blog
            </NavLink>
          </h2>
          <h2>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? styles.active : styles.notActive
              }
            >
              Faqs
            </NavLink>
          </h2>
          <h2>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? styles.active : styles.notActive
              }
            >
              Support
            </NavLink>
          </h2>
        </div>
      </div>
      {isOpenNav && (
        <div
          className={`${styles.navbar} ${
            isOpenNav ? styles.opened : styles.closed
          }`}
        >
          {/* Your navigation links here */}
          <a href="/">Home</a>
          <a href="/category">Categories</a>
          <a href="/generic">Apotheca Generics</a>
          <a href="/blog">Blog</a>
          <a href="/faqs">Faqs</a>
          <a href="/support">Support</a>
        </div>
      )}
    </header>
  );
};

export default Header;
