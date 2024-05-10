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

export const App = () => {
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
