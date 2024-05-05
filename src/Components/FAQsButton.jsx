import React, { useState } from "react";
import "./FAQsButton.css"; // Import your CSS file

const faqsApotheca =
  "Apotheca Online Pharmacy is a digital platform designed to offer a seamless and convenient way for individuals to access pharmaceutical products and healthcare services. Through our website, customers can browse an extensive selection of medications, over-the-counter products, and wellness essentials, all from the comfort of their own homes.";

const faqsLegitimacy =
  "Yes, Apotheca is a fully licensed and accredited online pharmacy. We operate in strict compliance with all applicable laws and regulations governing the sale and distribution of pharmaceuticals. Our commitment to regulatory adherence ensures that our customers can trust the authenticity and quality of the products we provide.";

const faqsSafety =
  "At Apotheca, we prioritize the safety and well-being of our customers above all else. To uphold our commitment to safety, we meticulously vet our suppliers and partners to ensure that all medications are sourced from reputable manufacturers and distributors. Additionally, our team of experienced pharmacists conducts thorough quality assurance checks on every product before it is made available for purchase.";

const faqsConsult =
  "Absolutely. Our team of licensed pharmacists is readily available to provide personalized consultation and guidance to our customers. Whether you have questions about medication interactions, dosage instructions, or general health concerns, our pharmacists are here to offer expert advice and support every step of the way.";

const faqsPlaceOrder =
  "Placing an order with Apotheca is quick and easy. Simply navigate to our user-friendly website, where you can browse our extensive catalog of products and add your desired items to your virtual shopping cart. If you have a prescription, you can securely upload it during the checkout process to ensure prompt fulfillment.";

const faqsPrescription =
  "In accordance with regulatory guidelines and best practices, Apotheca requires a valid prescription for all prescription medications. This policy helps to safeguard the health and well-being of our customers by ensuring that medications are used appropriately and responsibly. If you need assistance transferring your prescription, our team is here to help facilitate the process seamlessly.";

const faqsPayment =
  "Apotheca accepts a variety of secure payment methods to accommodate the diverse needs of our customers. These payment options include major credit and debit cards, as well as trusted online payment platforms such as PayPal. Rest assured that all payment information is encrypted and protected to ensure the highest level of security.";

const faqsShipping =
  "We understand the importance of prompt and reliable shipping, which is why we partner with reputable carriers to ensure timely delivery of all orders. Shipping times may vary depending on factors such as your location and selected shipping method, but rest assured that we strive to expedite the process wherever possible. Once your order has been dispatched, you will receive tracking information to monitor its progress every step of the way.";

const faqsReturn =
  "Customer satisfaction is our top priority at Apotheca, and we stand behind the quality of our products. If for any reason you are unsatisfied with your order or encounter an issue with a product, please don't hesitate to contact our dedicated customer service team. We will gladly assist you in arranging a return or exchange and work diligently to resolve any concerns to your satisfaction.";

const faqsPersonalInfo =
  "Yes, protecting the privacy and security of our customers' personal information is of utmost importance to us. To this end, we employ industry-standard encryption protocols and robust data security measures to safeguard all sensitive information transmitted through our platform. You can trust that your personal data is handled with the utmost care and confidentiality at Apotheca.";

const faqsDiscount =
  "As part of our ongoing commitment to providing exceptional value to our customers, Apotheca periodically offers discounts, promotions, and loyalty programs. These initiatives are designed to reward our loyal customers and make high-quality healthcare products more accessible to all. Be sure to sign up for our newsletter and follow us on social media to stay informed about the latest offers and promotions.";

const faqsAssistance =
  "Should you require further assistance or have any questions or concerns, our friendly and knowledgeable customer service team is here to help. You can reach us via phone, email, or live chat directly through our website. Whether you need assistance with an order, have questions about a product, or simply want to provide feedback, we're always here to lend a helping hand and ensure that your experience with Apotheca is nothing short of exceptional.";

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={toggle}>
        {question}
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FaqToggle = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    { question: "What is Apotheca Online Pharmacy?", answer: faqsApotheca },
    { question: "Is Apotheca a legitimate pharmacy?", answer: faqsLegitimacy },
    {
      question: "How does Apotheca ensure the safety of its medications?",
      answer: faqsSafety,
    },
    {
      question: "Can I consult with a pharmacist at Apotheca?",
      answer: faqsConsult,
    },
    {
      question: "How can I place an order with Apotheca?",
      answer: faqsPlaceOrder,
    },
    {
      question: "Does Apotheca require a prescription for all medications?",
      answer: faqsPrescription,
    },
    {
      question: "What payment methods does Apotheca accept?",
      answer: faqsPayment,
    },
    {
      question: "How does Apotheca handle shipping and delivery?",
      answer: faqsShipping,
    },
    {
      question: "What if I need to return or exchange a product?",
      answer: faqsReturn,
    },
    {
      question: "Is my personal information secure with Apotheca?",
      answer: faqsPersonalInfo,
    },
    {
      question: "Does Apotheca offer discounts or loyalty programs?",
      answer: faqsDiscount,
    },
    {
      question: "How can I contact Apotheca for further assistance?",
      answer: faqsAssistance,
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {faqItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default FaqToggle;
