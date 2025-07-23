import { Fragment, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import { CardContext } from "../Context/CardContext";
import AddCategoryDelailsStyle from "../resourse/cssModules/AddCategoryDelails.module.css";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import OrgNavBar from "./OrgNavBar";

const AddCategoryDelails = () => {
  const { cards, setCards } = useContext(CardContext);
  const { orgName } = useParams(); // اسم المنظمة من الرابط\
  const [org, setOrg] = useState(null);

  const key = `cards_${orgName}`;

  const [newCard, setNewCard] = useState({
    name: "",
    description: "",
    image: null,
  });

  //  تحميل البيانات من localStorage عند أول تحميل
  // useEffect(() => {
  //   const storedCards = localStorage.getItem("cards");
  //   if (storedCards) {
  //     setCards(JSON.parse(storedCards));
  //   }
  // }, []);
  useEffect(() => {
    // جلب بيانات المنظمة من localStorage
    const orgs = JSON.parse(localStorage.getItem("newOrgs") || "[]");
    const foundOrg = orgs.find(
      (o) => o.name.replace(/\s+/g, "").toLowerCase() === orgName.toLowerCase()
    );
    if (foundOrg) {
      setOrg(foundOrg);
    }

    // جلب الكاتيجوريز الخاصة بالمنظمة
    const storedCards = localStorage.getItem(key);
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, [orgName]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewCard({ ...newCard, image: url });
    }
  };

  // const handleSave = () => {
  //   if (!newCard.name || !newCard.description || !newCard.image) {
  //     alert("Please fill all fields and upload an image");
  //     return;
  //   }
  //   setCards([...cards, newCard]);
  //   setNewCard({ name: "", description: "", image: null });
  //   //  حفظ في localStorage

  //   localStorage.setItem("cards", JSON.stringify([...cards, newCard]));
  // };
  const handleSave = () => {
    if (!newCard.name || !newCard.description || !newCard.image) {
      alert("Please fill all fields and upload an image");
      return;
    }

    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem(key, JSON.stringify(updatedCards));
    setNewCard({ name: "", description: "", image: null });
  };
  const handleDelete = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    // تحديث localStorage بعد الحذف

    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  return (
    <Fragment>
      <OrgNavBar />
      <div className={`${AddCategoryDelailsStyle.container}`}>
        <h2 className="text-center mb-4">Add Category Details</h2>

        {/* صورة Red Crescent والنص */}
        {/* <div className="d-flex justify-content-center mb-4">
          <p className="org-description mb-4 text-center">
            An independent, recognized National Society within the <br />
            Red Cross and Red Crescent Movement.
          </p>
        </div> */}
        {/* عرض اسم، صورة، ووصف المنظمة من localStorage */}
        <div className="text-center mb-4">
          <h2 className="mb-3">{org?.name}</h2>
          <img
            src={org?.image}
            alt={org?.name}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <p className="org-description">{org?.description}</p>
        </div>
        {/* الكروت */}
        <div className="row justify-content-center">
          {/* كارد الإدخال */}
          <div className="col-md-5 col-lg-4 mb-3">
            <div
              className={`${AddCategoryDelailsStyle.orgCard} d-flex flex-column justify-content-between`}
              style={{ height: "100%" }}
            >
              {/* الصورة */}
              <div
                className={`${AddCategoryDelailsStyle.uploadBox} text-white mb-3`}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "208px",
                  backgroundColor: "#5a5a9f",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {newCard.image ? (
                  <img
                    src={newCard.image}
                    alt="Uploaded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
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

              {/* الحقول + زر الحفظ */}
              <div className="p-3 d-flex flex-column" style={{ flexGrow: 1 }}>
                <input
                  className="form-control mb-2 fw-bold"
                  placeholder="Add Name"
                  value={newCard.name}
                  onChange={(e) =>
                    setNewCard({ ...newCard, name: e.target.value })
                  }
                />
                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Add Description"
                  value={newCard.description}
                  onChange={(e) =>
                    setNewCard({ ...newCard, description: e.target.value })
                  }
                />

                {/* الزر جوه الكارد */}
                <button
                  className="btn btn-danger w-100 mt-auto"
                  onClick={handleSave}
                  style={{ fontSize: "16px", borderRadius: "8px" }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* الكروت المضافة */}
          {cards.map((card, index) => (
            // <div className="col-md-5 col-lg-4 mb-3">

            <div className="col-md-5 col-lg-4 mb-3" key={index}>
              <div className={`${AddCategoryDelailsStyle.orgCard}`}>
                {card.image && (
                  <img
                    src={card.image}
                    className="img-top"
                    style={{
                      width: "100%",
                      height: "208px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                    alt={card.name}
                  />
                )}
                <div className="p-3 text-center">
                  <h5 className="fw-bold">{card.name}</h5>
                  <p>{card.description}</p>
                  <div className="text-center mt-2">
                    <button
                      className="btn btn-outline-danger btn-sm px-3 py-1"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    </Fragment>
  );
};

export default AddCategoryDelails;
