import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import Logo from "../resourse/imgs/Red Crescent.png";

import AddCategoryStyle from "../resourse/cssModules/AddCategory.module.css";
import { useContext, useEffect } from "react";
import { CardContext } from "../Context/CardContext";

const RedCrescentDetailsForIndviual = () => {
  const { cards, setCards } = useContext(CardContext);
  // استرجاع البيانات من localStorage عند أول تحميل

  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);
  return (
    <Fragment>
      <NavBar />
      <main
        className={`${AddCategoryStyle.container} my-5 p-4 bg-white rounded-4 text-center shadow`}
      >
        <h2 className={`${AddCategoryStyle.title}`}>
          Palestine Red Crescent Society
        </h2>
        <img
          src={Logo}
          alt="Red Crescent Logo"
          className={AddCategoryStyle.icon}
          style={{
            objectFit: "cover",
            height: "200px",
            width: "220px",
            marginBottom: "20px",
          }}
        />
        <p className={`${AddCategoryStyle.info}`}>
          An independent, recognized National Society within the
          <br />
          Red Cross and Red Crescent Movement.
        </p>
        {cards.length === 0 ? (
          <p>No categories added yet.</p>
        ) : (
          cards.map((card, index) => (
            <div
              key={index}
              className={`card ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`}
            >
              <h3 className="d-flex align-items-center">
                <img
                  src={card.image}
                  className={`${AddCategoryStyle.icon} me-3`}
                  alt={card.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                {card.name}
                <span className={`${AddCategoryStyle.rating} ms-auto`}>
                  ★★★★★
                </span>
              </h3>
              <p>{card.description}</p>
              <a
                href="/CitizenRegistration"
                className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`}
              >
                Register
              </a>
            </div>
          ))
        )}
      </main>
    </Fragment>
  );
};
export default RedCrescentDetailsForIndviual;
