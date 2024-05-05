import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import BlogPage from "./Components/BlogPage";
import FAQsPage from "./Components/FAQsPage";
import PharmAssistPage from "./Components/PharmAssistPage";
import FooterPage from "./Components/FooterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogForCommonDiseases from "./Components/BlogForCommonDiseases";
import CategoryPage from "./Components/CategoryPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/blog" Component={BlogPage} />
        <Route path="blog/common-disease" Component={BlogForCommonDiseases} />
        <Route path="/faqs" Component={FAQsPage} />
        <Route path="/pharmassist" Component={PharmAssistPage} />
        <Route path="/category" Component={CategoryPage} />
      </Routes>
      <FooterPage />
    </Router>
  );
};

export default App;
