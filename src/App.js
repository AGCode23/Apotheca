// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import BlogPage from "./Components/BlogPage";
import FAQsPage from "./Components/FAQsPage";
import PharmAssistPage from "./Components/PharmAssistPage";
import FooterPage from "./Components/FooterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogForCommonDiseases from "./Components/BlogForCommonDiseases";
import CategoryPage from "./Components/CategoryPage";
import SupportPage from "./Components/SupportPage";
import AddProductsPage from "./Components/AddProductsPage";
import Checkout from "./Components/Checkout";
import { auth } from "./Config/Config";
import { useStateValue } from "./Components/StateProvider";
import { useEffect } from "react";

export const App = () => {
  const [{ loggedinuser }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        dispatch({
          type: "SET_LOGIN",
          user: userauth,
        });
      } else {
        dispatch({
          type: "SET_LOGIN",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/blog/common-disease"
          element={<BlogForCommonDiseases />}
        />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/pharmassist" element={<PharmAssistPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/add-product" element={<AddProductsPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <FooterPage />
    </Router>
  );
};

export default App;
