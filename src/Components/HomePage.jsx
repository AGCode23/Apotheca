import "./HomePage.css";
import Header from "./Header";
import ProductList from "./ProductList";
import {
  ADS1,
  ADS2,
  ADS3,
  ADS5,
  adv,
  alx,
  amox,
  ben,
  bio,
  cefalin,
  cet,
  fex,
  lip,
} from "../Assets/Images/index";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Advil Ibuprofen",
    price: 40,
    image: adv,
  },
  {
    id: 2,
    name: "Alaxan Ibuprofen Paracetamol",
    price: 30,
    image: alx,
  },
  {
    id: 3,
    name: "Amoxil Amoxicillin",
    price: 150,
    image: amox,
  },
  {
    id: 4,
    name: "Benadryl Diphenhydramine",
    price: 80,
    image: ben,
  },
  {
    id: 5,
    name: "Biogesic Paracetamol",
    price: 30,
    image: bio,
  },
  {
    id: 6,
    name: "Cefalin Cefalix",
    price: 200,
    image: cefalin,
  },
  {
    id: 7,
    name: "Zytrec Cetirizine",
    price: 80,
    image: cet,
  },
  {
    id: 8,
    name: "Allegra Fexofenadine",
    price: 120,
    image: fex,
  },
  {
    id: 9,
    name: "Lipitor Atorvastatin",
    price: 400,
    image: lip,
  },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <body>
        {/* Start of home carousel */}
        <div className="carousel-box-home">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide custom-carousel-width"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner image-sizing">
              <div class="carousel-item active">
                <img src={ADS1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={ADS2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={ADS3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* End of home carousel */}
        <div className="home-container">
          <div className="home-product-container">
            <div className="home-heading">
              <h2>FEATURED PRODUCTS</h2>
              <NavLink to="/category">
                <p>See All</p>
              </NavLink>
            </div>
            <div className="product-list-home">
              <div className="scroll-container">
                <ProductList products={products} />
              </div>
            </div>
          </div>
        </div>
        <div className="home-ads">
          <img className="ads" src={ADS5} alt="ads5" />
        </div>
      </body>
    </div>
  );
};

export default HomePage;
