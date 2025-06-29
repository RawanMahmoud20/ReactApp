import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import Logo from "../resourse/imgs/Red Crescent.png";
import health from "../resourse/imgs/health.jpg";
import Food from "../resourse/imgs/Food.jpg";
import Homeless from "../resourse/imgs/homeless.jpg";
import Financial from "../resourse/imgs/Financial .jpg";
import AddCategoryStyle from "../resourse/cssModules/AddCategory.module.css";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const RedCrescentDetailsForIndviual = () => {
  const { cards } = useContext(CardContext);

  return (
    <Fragment>
      <NavBar />
      <main
        className={`${AddCategoryStyle.container} my-5 p-4 bg-white rounded-4 text-center shadow`}
      >
        <h2 className={`${AddCategoryStyle.title}`}>
          Palestine Red Crescent Society
        </h2>

        {cards.length === 0 ? (
          <p>No categories added yet.</p>
        ) : (
          cards.map((card, index) => (
            <div
              key={index}
              className={`card ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`}
            >
              <h3>
                <img
                  src={card.image}
                  className={AddCategoryStyle.icon}
                  alt="logo"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                {card.name}
                <span className={AddCategoryStyle.rating}>★★★★★</span>
              </h3>
              <p>{card.description}</p>
              <a
                className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`}
                href="#"
              >
                Register
              </a>
            </div>
          ))
        )}
        {/* <div className={`card ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`}>
          <h3>
            <img src={Food} className={`${AddCategoryStyle.icon}`} alt="logo" />
            Food Assistance
            <span className={`${AddCategoryStyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We provide food packages to needy families to ensure food security
          </p>
          <a className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`} href="#">
            register
          </a>
        </div>
        <div className={`card  ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`}>
          <h3>
            <img src={Homeless} className={`${AddCategoryStyle.icon}`} alt="logo" />
            Housing Assistance
            <span className={`${AddCategoryStyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We offer housing support through rent assistance or safe temporary
            shelter
          </p>
          <a className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`} href="#">
            register
          </a>
        </div>
        <div className={`card  ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`}>
          <h3>
            <img src={Financial} className={`${AddCategoryStyle.icon}`}  alt="logo" />
            Financial Assistance
            <span className={`${AddCategoryStyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We provide financial support to ease the living burdens of those in
            need
          </p>
          <a className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`} href="#">
            register
          </a>
        </div> */}
      </main>
    </Fragment>
  );
};
export default RedCrescentDetailsForIndviual;
