// App.js

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import BlogPage from "./Components/BlogPage";
import FAQsPage from "./Components/FAQsPage";
import PharmAssistPage from "./Components/PharmAssistPage";
import FooterPage from "./Components/FooterPage";
import MobileNavbar from "./Components/MobileNavBar";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogForCommonDiseases from "./Components/BlogForCommonDiseases";
import CategoryPage from "./Components/CategoryPage";
import SupportPage from "./Components/SupportPage";
import AddProductsPage from "./Components/AddProductsPage";
import { auth } from "./Config/Config"; 

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/common-disease" element={<BlogForCommonDiseases />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/pharmassist" element={<PharmAssistPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/add-products" element={<AddProductsPage />} />
      </Routes>
      <MobileNavbar user={user} />
      <LoginPage isOpen={false} close={() => {}} />
      <FooterPage />
    </Router>
  );
};

export default App;
