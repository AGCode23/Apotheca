import React from "react";
import styles from "./SupportPage.module.css";
import Header from "./Header";

const SupportPage = () => {
  return (
    <div className={styles.supportContainer}>
      <Header />
      <div className={styles.supportGrid}>
        <div className={styles.customerServiceContainer}>
          <div className={styles.customerService}>
            <h2>Customer Service</h2>
            <div className={styles.hotline}>
              <p>Hotline: (440) 123456</p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.customerServiceContainer} ${styles.forOnlineGrid}`}
        >
          <div className={styles.customerService}>
            <h2>Online Order Support</h2>
            <div className={styles.hotline}>
              <p>Inquire</p>
            </div>
          </div>
        </div>
        <div className={styles.customerSupportInfo}>
          <div className={styles.supportInfoContainer}>
            <h3>Apotheca Customer Support</h3>
            <div className={styles.infoOne}>
              <p>
                Here to aid with FAQs, refunds, complains, and other inquiries
                related to our services.
              </p>
              <p>
                Available to serve you daily from 7:00 AM to 8:00 PM (Except
                Holidays)
              </p>
            </div>
            <div className={styles.infoTwo}>
              <p>You may reach us through the following:</p>
              <p>Telephone: +(63)9123456789</p>
              <p>Email: apothecadrugstore@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
