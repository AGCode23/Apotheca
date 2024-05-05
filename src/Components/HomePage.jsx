import "./HomePage.css";
import Header from "./Header";
import ProductList from "./ProductList";
import {
  ADS1,
  ADS2,
  ADS3,
  ADS5,
  Adeflo,
  Prolix,
  Nexium,
  Unasyn,
} from "../Assets/Images/index";

const products = [
  {
    id: 1,
    name: "Unasyn",
    price: 10,
    image: Unasyn,
  },
  {
    id: 2,
    name: "Nexium",
    price: 15,
    image: Nexium,
  },
  {
    id: 3,
    name: "Product 2",
    price: 15,
    image: Adeflo,
  },
  {
    id: 4,
    name: "Product 2",
    price: 15,
    image: Prolix,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
  },
  {
    id: 5,
    name: "Product 2",
    price: 15,
    image: Nexium,
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
              <p>See All</p>
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
        <div className="home-container">
          <div className="home-product-container">
            <div className="home-heading">
              <h2>GENERIC PRODUCTS</h2>
              <p>See All</p>
            </div>
            <div className="product-list-home">
              <div className="scroll-container">
                <ProductList products={products} />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default HomePage;
