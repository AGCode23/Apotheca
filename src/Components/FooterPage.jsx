import React from "react";
import { Logo, fbIcon, igIcon, xIcon } from "../Assets/Images/index";
import "./FooterPage.css";

export const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  const recipientEmail = "apothecadrugstore@gmail.com";
  const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;
  return (
    <footer>
      <div className="bottom-nav">
        <div className="first-section-footer">
          <div className="footer-logo-cont">
            <img
              height={75}
              src={Logo}
              alt="apotheca logo"
              className="apotheca-footer"
            />
            <h2>Apotheca</h2>
          </div>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="second-section-footer">
          <h3>SERVICES</h3>
          <ul>
            <li>Payment</li>
            <li>Shipping and Delivery</li>
            <li>Return and Refunds</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div className="third-section-footer">
          <h3>CONTACTS</h3>
          <ul>
            <li>
              46 Schumm Spur 78A/17 <br /> Champlin Green Apt. <br /> 156 New
              Jersey Makati 1202 Philippines
            </li>
            <li>Telephone: 0912-345-6789</li>
            <li>
              <a href={composeUrl} target="_blank" rel="noopener noreferrer">
                Email: apothecadrugstore@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="fourth-section-footer">
          <h4>Follow us on Social Media</h4>
          <div className="footer-images">
            <img height={40} src={fbIcon} alt="Facebook" />
            <img height={40} src={igIcon} alt="Instagram" />
            <img height={40} src={xIcon} alt="X" />
          </div>
        </div>
      </div>
      <div className="super-bottom-nav">
        <p>© {currentYear} apotheca.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;
