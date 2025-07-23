import { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import UN from "../resourse/imgs/UN.jpg";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import Uniesf from "../resourse/imgs/Uniesf.jpg";
import UserPageStyle from "../resourse/cssModules/OurOrganizations.module.css";
import { NavLink } from "react-router-dom";

const UserPage = () => {
  const [newOrgs, setNewOrgs] = useState([]);

  useEffect(() => {
    const savedOrgs = localStorage.getItem("newOrgs");
    if (savedOrgs) {
      setNewOrgs(JSON.parse(savedOrgs));
    }
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedOrgs = newOrgs.filter((_, i) => i !== indexToDelete);
    setNewOrgs(updatedOrgs);
    localStorage.setItem("newOrgs", JSON.stringify(updatedOrgs));
  };

  const fixedOrgs = [
    {
      img: UN,
      date: "June 11, 1868",
      title: "Can hope survive without UNRWA’s support for refugees ?!",
      desc: `We provide assistance, protection, and advocacy to over 
            5.9 million Palestine refugees.`,
      link: "/UNDetailsForIndviual",
    },
    {
      img: RedCrescent,
      date: "June 11, 1868",
      title: "How can be the first hand to reach people in times of crisis !",
      desc: `An independent, recognized National Society within the 
            Red Cross and Red Crescent Movement.`,
      link: "/RedCrescentDetailsForIndviual",
    },
    {
      img: Uniesf,
      date: "June 11, 1868",
      title: "How did we get 1M+ visitors in 30 days without anything !",
      desc: `We will remain and continue supporting children. 
            If others step back, who will stand for them?`,
      link: "/UnisefDetailsForIndviual",
    },
  ];

  const renderCard = (org, index, isNew = false) => (
    <div
      key={index}
      className={`${UserPageStyle.orgCard} gx-5`}
      style={{ width: "18rem", marginBottom: "20px", height: "490px" }}
    >
      <img
        src={org.image || org.img || "default-image.png"}
        className="card-img-top"
        alt={org.name || org.title || "Organization"}
      />
      <div className={`${UserPageStyle.cardBody}`}>
        <p className={`${UserPageStyle.cardText}`}>
          {org.date || "Date not available"}
        </p>
        <p className={`${UserPageStyle.cardTitle}`}>{org.name || org.title}</p>
        <p className={`${UserPageStyle.cardText}`}>
          {org.description || org.desc}
        </p>

        <div className={`${UserPageStyle.cardActions}`}>
          {isNew && (
            <button
              className={UserPageStyle.deleteBtn}
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          )}
          <NavLink
            to={
              org.link && org.link.trim() !== ""
                ? org.link
                : org.name
                ? `/OrgDetails/${org.name.replace(/\s+/g, "")}`
                : "/Error"
            }
            className={UserPageStyle.readMore}
          >
            Show More
            {console.log("org.link", org.link) }
          </NavLink>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <NavBar />
      <section className={`${UserPageStyle.sectionTitle}`}>
        <h2>Organizations</h2>
        <p className="fs-5">
          HelpHive organizations that stand by those in need ,<br />
          here are the helping hands that never hesitate.
        </p>
      </section>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {newOrgs.map((org, i) => renderCard(org, i, true))}
        {fixedOrgs.map((org, i) => renderCard(org, i + newOrgs.length, false))}
      </div>
    </Fragment>
  );
};

export default UserPage;
