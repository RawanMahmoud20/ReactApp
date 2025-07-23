
import { Fragment, useEffect, useState, useContext } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import AddCategoryStyle from "../resourse/cssModules/AddCategory.module.css";
import { CardContext } from "../Context/CardContext";
import { useParams, Link, NavLink } from "react-router-dom";

const OrgDetails = () => {
  const { orgName } = useParams();
  const [org, setOrg] = useState(null);
  const { cards, setCards } = useContext(CardContext);

  useEffect(() => {
    // جلب بيانات المؤسسة
    const orgs = JSON.parse(localStorage.getItem("newOrgs") || "[]");
    const foundOrg = orgs.find(
      (o) =>
        o.name &&
        o.name.replace(/\s+/g, "").toLowerCase() === orgName.toLowerCase()
    );
    if (foundOrg) {
      setOrg(foundOrg);

      // تحميل الكاتيجوريز الخاصة بها فقط
      const key = `cards_${foundOrg.name.replace(/\s+/g, "")}`;
      const storedCards = localStorage.getItem(key);
      if (storedCards) {
        setCards(JSON.parse(storedCards));
      } else {
        setCards([]); // لا يوجد بيانات
      }
    }
  }, [orgName]);

  if (!org) {
    return <p className="text-center">Organization not found</p>;
  }

  return (
    <Fragment>
      <NavBar />
      <main
        className={`container my-5 p-4 bg-white rounded-4 text-center shadow ${AddCategoryStyle.container}`}
      >
        <h2 className={AddCategoryStyle.title}>{org.name}</h2>
        <img
          src={org.image}
          alt={org.name}
          className={AddCategoryStyle.icon}
          style={{
            objectFit: "cover",
            height: "200px",
            width: "220px",
            marginBottom: "20px",
          }}
        />
        <p className={AddCategoryStyle.info}>{org.description}</p>

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
              <Link
                to="/CitizenRegistration"
                className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`}
              >
                Register
              </Link>
            </div>
          ))
        )}

        <div className={`card card-custom p-3 mb-3 text-start`}>
          <h3>
            <NavLink to={`/AddCategoryDelails/${org.name.replace(/\s+/g, "")}`}>
              <i
                className={`fas fa-circle-plus ${AddCategoryStyle.plusIcon}`}
              ></i>
            </NavLink>
            Add category
            <span className={`${AddCategoryStyle.rating}`}>★★☆☆☆</span>
          </h3>
          <p>Add information about Organization.</p>
        </div>

        <button className={`${AddCategoryStyle.saveBtn} mt-3`}>Save</button>
      </main>
    </Fragment>
  );
};

export default OrgDetails;


// import { useParams } from "react-router-dom";
// import NavBar from "../Components/NavBar";
// import { useEffect, useState } from "react";

// const OrgDetails = () => {
//     const { orgName } = useParams(); // راح يكون مثلاً "Health"
//     const [org, setOrg] = useState(null);

//   useEffect(() => {
//     const orgs = JSON.parse(localStorage.getItem("newOrgs") || "[]");
//     const foundOrg = orgs.find(
//         (o) =>
//           o.name &&
//           o.name.replace(/\s+/g, "").toLowerCase() === orgName.toLowerCase()
//       );
//     if (foundOrg) {
//       setOrg(foundOrg);
//     }
//   }, [orgName]);

//   if (!org) {
//     return <p className="text-center">Organization not found</p>;
//   }

//   return (
//     <>
//       <NavBar />
//       <div className="container my-5 text-center">
//         <h2>{org.name}</h2>
//         <img
//           src={org.image}
//           alt={org.name}
//           style={{
//             width: "300px",
//             height: "200px",
//             objectFit: "cover",
//             borderRadius: "12px",
//             marginBottom: "20px",
//           }}
//         />
//         <p>
//           <strong>Date:</strong> {org.date}
//         </p>
//         <p>{org.description}</p>
//       </div>
//     </>
//   );
// };

// export default OrgDetails;
