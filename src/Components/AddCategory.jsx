import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import AddCategorystyle from "../resourse/cssModules/AddCategory.module.css";
import health from "../resourse/imgs/health.jpg";
import { useContext, useEffect } from "react";
import { CardContext } from "../Context/CardContext";
import AddCategoryStyle from "../resourse/cssModules/AddCategory.module.css";
import { useParams } from "react-router-dom";
import OrgNavBar from "./OrgNavBar";

const AddCategory = () => {
  const { cards, setCards } = useContext(CardContext);
  // استرجاع البيانات من localStorage عند أول تحميل
  const { orgName } = useParams(); // اسم المنظمة من الرابط

  useEffect(() => {

    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  return (
    <Fragment>
      <OrgNavBar />
      <main
        className={`container my-5 p-6 bg-white rounded-4 text-center shadow ${AddCategorystyle.container}`}
      >
        <h2 className={`${AddCategorystyle.title}`}>
          Palestine Red Crescent Society
        </h2>
        <img
          src={RedCrescent}
          alt="Red Crescent Logo"
          className={`${AddCategorystyle.my3}`}
        />

        <p className={`${AddCategorystyle.info}`}>
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
              className={`card ${AddCategorystyle.cardCustom} p-3 mb-3 text-start`}
            >
              <h3 className="d-flex align-items-center">
                <img
                  src={card.image}
                  className={`${AddCategorystyle.icon} me-3`}
                  alt={card.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                {card.name}
                <span className={`${AddCategorystyle.rating} ms-auto`}>
                  ★★★★★
                </span>
              </h3>
              <p className="ms-5">{card.description}</p>
              <a
                href="/CitizenRegistration"
                className={`btn ${AddCategorystyle.btndanger} text-white ms-5`}
              >
                Register
              </a>
            </div>
          ))
        )}

        {/* <div className={`card card-custom p-3 mb-3 text-start`}>
          <h3>
            <img src={health} className={`${AddCategorystyle.icon}`} alt="logo" />
            Health
            <span className={`${AddCategorystyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We help cover treatment costs and essential medications for those in
            need
          </p>
        </div> */}

        <div className={`card card-custom p-3 mb-3 text-start`}>
          <h3>
            <a href="./AddCategoryDelails">
              <i
                className={`fas fa-circle-plus ${AddCategorystyle.plusIcon}`}
              ></i>
            </a>
            Add category
            <span className={`${AddCategorystyle.rating}`}>★★☆☆☆</span>
          </h3>
          <p>Add information about Organization.</p>
        </div>

        <button className={`${AddCategorystyle.saveBtn} mt-3`}>Save</button>
      </main>
    </Fragment>
  );
};
export default AddCategory;
