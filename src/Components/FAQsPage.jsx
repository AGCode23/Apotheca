import "./FAQsPage.css";
import Header from "./Header";
import FAQsButton from "./FAQsButton";

export const FAQsPage = () => {
  return (
    <div>
      <Header />
      <body>
        <div className="faqs-header">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-topic">
            <FAQsButton />
          </div>
        </div>
      </body>
    </div>
  );
};

export default FAQsPage;
