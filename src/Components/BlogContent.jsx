import React from "react";
import { BlogImage } from "../Assets/Images";
import DropdownForBlog from "./DropdownForBlog";

const BlogContent = () => (
  <section className="blog-content">
    <DropdownForBlog />
    <div className="blog-image">
      <img src={BlogImage} alt="Blog depiction" />
      <h2>Understanding What's Written in Your Doctor's Prescription</h2>
      <p className="doctor-name">Dr. Lanz Enderson Reyes</p>
      <p id="blog-disclaimer">
        <span className="text-highlight">Disclaimer:</span> This article
        features medical and health topics for educational and informational
        purposes only. It is not intended to replace or serve as medical or
        professional advice for self-diagnosis, self-treatment, self-medication,
        or the like for any health-related condition or medical emergency. Make
        sure to consult a health care or medical professional for proper medical
        care, diagnosis, or treatment related to your situation.
      </p>
    </div>
  </section>
);

export default BlogContent;
