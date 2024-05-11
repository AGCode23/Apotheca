import React, { useState, useEffect } from "react";
import { auth, db } from "../Config/Config";
import styles from "./OrderPage.module.css";
import Header from "./Header";

const OrderPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pwdCard, setPwdCard] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setAddress(doc.data().address || "");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setUserEmail("");
        setAddress("");
      }
    });
    return () => unsubscribe();
  }, []);

  const handlePasswordUpdate = () => {};

  const handleAddressUpdate = () => {
    const user = auth.currentUser;
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .update({
          address: address,
        })
        .then(() => {
          alert("Address updated successfully");
        })
        .catch((error) => {
          alert("Error updating address: " + error.message);
        });
    } else {
      alert("User not logged in");
    }
  };

  const handlePwdCardUpload = (e) => {
    const file = e.target.files[0];
    setPwdCard(file);
  };

  const uploadPwdCard = () => {
    console.log("Uploading PWD card:", pwdCard);
  };

  return (
    <div>
      <Header />
      <div className={styles.orderGrid}>
        <div className={styles.orderLeft}>
          <h2>Profile</h2>
          <div className={`${styles.highlightedEmail} ${styles.emailText}`}>Email: {userEmail}</div>
          <div className={styles.inputGroup}>
            <label htmlFor="pwdCard">Upload PWD Card:</label>
            <input
              type="file"
              id="pwdCard"
              onChange={handlePwdCardUpload}
              accept=".pdf,.jpg,.jpeg,.png"
              style={{ display: "none" }}
            />
            <label htmlFor="pwdCard" className={styles.uploadButton}>
              Choose File
            </label>
          </div>
          <div className={styles.leftButton}>
            <button onClick={uploadPwdCard}>Upload PWD Card</button>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.leftButton}>
            <button onClick={handlePasswordUpdate}>Update Password</button>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.leftButton}>
            <button onClick={handleAddressUpdate}>Update Address</button>
          </div>
        </div>
        <div className={styles.orderRight}>
          <h2>Orders to Receive</h2>
          <div className={styles.orderBox}>
            <table className={styles.orderTable}>
              <tbody>
                <tr>
                  <td className={styles.emptyCell}>No orders to display.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div className={styles.rightButton}>
            <button>Orders Received</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
