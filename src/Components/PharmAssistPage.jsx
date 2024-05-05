import "./PharmAssistPage.css";
import Header from "./Header";
import PharmAssistForm from "./PharmAssistForm";

export const PharmAssistPage = () => {
  return (
    <div>
      <Header />
      <body>
        <div className="pharmassist-page-header">
          <h2 className="pharmassist-tagline">
            PharmAssist provides online consultations with pharmacist, aiming to
            contribute to a healthy lifestyle.
          </h2>
          <div className="pharmassist-list-container">
            <p>
              Discover a revolutionary approach to healthcare through
              PharmAssist's cutting-edge online consultations with pharmacists.
              Our platform offers seamless access to expert advice from licensed
              professionals, empowering you to address your health concerns and
              embark on a journey towards a healthier lifestyle. With
              PharmAssist, you can benefit from personalized consultations
              tailored to your unique needs, ensuring you receive accurate
              information and guidance every step of the way. Take charge of
              your well-being today and experience the transformative impact of
              collaborating with our skilled team of pharmacy professionals.
            </p>
            <ul>
              <li>
                <span className="highlights">Convenient Access:</span> Access
                expert advice from licensed pharmacists anytime, anywhere.
              </li>
              <li>
                <span className="highlights">Personalized Consultations:</span>{" "}
                Receive tailored guidance to address your specific health needs
                and goals.
              </li>
              <li>
                <span className="highlights">Expert Guidance:</span> Benefit
                from the expertise of experienced pharmacists for reliable
                information
              </li>
              <li>
                <span className="highlights">Confidentiality:</span> Enjoy
                complete privacy and confidentiality during your consultations.
              </li>
              <li>
                <span className="highlights">Healthier Lifestyle:</span> Explore
                strategies and solutions aimed at promoting a healthier
                lifestyle.
              </li>
              <li>
                <span className="highlights">Comprehensive Support:</span> Get
                assistance with medication management, chronic conditions, and
                general health advice.
              </li>
              <li>
                <span className="highlights">Accessible Platform:</span> Utilize
                our user-friendly online platform for scheduling appointments
                and accessing resources.
              </li>
              <li>
                <span className="highlights">Empowering Individuals:</span> Gain
                the knowledge and tools needed to make informed decisions about
                your health.
              </li>
            </ul>

            <h3 className="header-for-forms">FILL OUT THIS FORM</h3>
          </div>
        </div>
        {/* <div className="pharmassist-inputs">
          <div className="name-pharmassist">
            <h4>Name</h4>
            <input type="text" name="name" id="name-pharmassist" />
          </div>
          <div className="email-pharmassist">
            <h4>Email</h4>
            <input type="email" name="email" id="email-pharmassist" />
          </div>
        </div>
        <div className="pharmassist-inputs-b">
          <div className="title-pharmassist">
            <h4>Title</h4>
            <input type="text" name="title" id="title-pharmassist" />
          </div>
          <div className="question-pharmassist">
            <h4>Question</h4>
            <input type="text" name="question" id="question-pharmassist" />
          </div>
        </div> */}
        <PharmAssistForm />
        {/* <div className="submit-to-pharmassist">
          <button type="button" class="btn btn-outline-primary">
            Primary
          </button>
        </div> */}
        <div className="pharmassist-footer">
          <h2>Ask our Pharmacist, not the Internet.</h2>
          <p>
            At Apotheca Online Pharmacy, we prioritize your health and
            well-being above all else. That's why we encourage you to "Ask our
            Pharmacist, not the Internet." Our team of experienced and licensed
            pharmacists is here to provide you with personalized, reliable, and
            confidential advice regarding your medications, health concerns, and
            general wellness inquiries. Whether you have questions about
            potential drug interactions, dosage instructions, or want to learn
            more about managing a specific health condition, we're here to help.
            By consulting with our knowledgeable pharmacists, you can trust that
            you'll receive accurate information tailored to your individual
            needs. At Apotheca, your health is our top priority, and we're
            committed to ensuring that you have the support and guidance you
            need for a healthier, happier life.
          </p>
        </div>
      </body>
    </div>
  );
};

export default PharmAssistPage;
