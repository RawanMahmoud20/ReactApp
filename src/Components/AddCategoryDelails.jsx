import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import health1 from "../resourse/imgs/health1.jpg";
import AddCategoryDelailsStyle from "../resourse/cssModules/AddCategoryDelails.module.css";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { NavLink } from "react-router-dom";
const AddCategoryDelails = () => {
  const { cards, setCards } = useContext(CardContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCards({ ...cards, image: url });
    }
  };
  const handleSave = () => {
    const newCard = {
      name: cards.name,
      description: cards.description,
      image: cards.image,
    };

    setCards([...cards, newCard]);
  };

  return (
    <Fragment>
      <NavBar />
      <div className={`${AddCategoryDelailsStyle.container}`}>
        <h2>Add Category Details</h2>

        <div className={`container-box ${AddCategoryDelailsStyle.containeBox}`}>
          <img
            src={RedCrescent}
            className={`card-img-top ${AddCategoryDelailsStyle.cardImgTop}`}
            alt="Org 2"
          />

          <div className="d-flex justify-content-center mb-4">
            <p className="org-description mb-4 text-center">
              An independent, recognized National Society within the <br />
              Red Cross and Red Crescent Movement.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className={`${AddCategoryDelailsStyle.orgCard}`}>
                <div
                  className={`${AddCategoryDelailsStyle.uploadBox} text-white mb-3`}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "208px",
                  }}
                >
                  {cards.image ? (
                    <img
                      src={cards.image}
                      className="img-top"
                      alt="Uploaded"
                      style={{
                        width: "100%",
                        margin: "0px",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        display: "block",
                        background: "none", // تأكد عدم وجود خلفية
                      }}
                    />
                  ) : (
                    <>
                      <i
                        className="fa-solid fa-camera fa-2x mb-2"
                        style={{ color: "white" }}
                      ></i>
                      <span>Upload or drag photos here</span>
                    </>
                  )}

                  {/* إدخال الملف */}
                  <input
                    type="file"
                    onChange={handleImageChange}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      cursor: "pointer",
                    }}
                  />
                </div>

                {/* إدخالات النص */}
                <div className={`${AddCategoryDelailsStyle.cardBody}`}>
                  <input
                    className={`form-control mb-2 ${AddCategoryDelailsStyle.cardTitle}`}
                    placeholder="Add Name"
                    value={cards.name}
                    onChange={(e) =>
                      setCards({ ...cards, name: e.target.value })
                    }
                  />
                  <textarea
                    rows="4"
                    className={`form-control ${AddCategoryDelailsStyle.cardText}`}
                    placeholder="Add Description"
                    value={cards.description}
                    onChange={(e) =>
                      setCards({ ...cards, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - ثابت */}
            <div className="col-md-4 mb-4">
              <div className={`${AddCategoryDelailsStyle.orgCard}`}>
                <img
                  src={health1}
                  className="img-top"
                  style={{ width: "100%", margin: "0px" }}
                  alt="Health"
                />
                <div className={`${AddCategoryDelailsStyle.cardBody}`}>
                  <h5 className={`${AddCategoryDelailsStyle.cardTitle}`}>
                    Health
                  </h5>
                  <p className={`${AddCategoryDelailsStyle.cardText}`}>
                    An independent, recognized National Society within the
                    <br />
                    Red Cross and Red Crescent Movement.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - فارغ للتصميم */}
            <div className="col-md-4 mb-4">
              <div className={`${AddCategoryDelailsStyle.orgCard}`}>
                <div
                  className={`${AddCategoryDelailsStyle.uploadBox} text-white mb-3`}
                >
                  <i
                    className="fa-solid fa-camera fa-2x mb-2"
                    style={{ color: "white" }}
                  ></i>
                  <span>Upload or drag photos here</span>
                </div>
                <div className={`${AddCategoryDelailsStyle.cardBody}`}>
                  <input
                    className={`form-control mb-2 ${AddCategoryDelailsStyle.cardTitle}`}
                    placeholder="Add Name"
                  />
                  <textarea
                    rows="4"
                    className={`form-control ${AddCategoryDelailsStyle.cardText}`}
                    placeholder="Add Description"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <NavLink
              onClick={handleSave}
              to="/RedCrescentDetailsForIndviual"
              className={`save-btn ${AddCategoryDelailsStyle.saveBtn}`}
            >
              Save
            </NavLink>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-5 d-flex justify-content-center">
        <ul className="pagination">
          {["<", "1", "2", "3", "...", "9", ">"].map((item, index) => (
            <li
              key={index}
              className={`${AddCategoryDelailsStyle.pageItem} ${
                item === "1" ? "active" : ""
              }`}
            >
              <a
                className={`page-link ${AddCategoryDelailsStyle.pageLink}`}
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default AddCategoryDelails;
