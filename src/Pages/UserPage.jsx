import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import UN from "../resourse/imgs/UN.jpg";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import Uniesf from "../resourse/imgs/Uniesf.jpg";
import UserPageStyle from "../resourse/cssModules/OurOrganizations.module.css";
import { useContext } from "react";
import { RegisterContext } from "../context/RegisterContext";

const UserPage = () => {
  const { registerAs } = useContext(RegisterContext);

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

      <div>
        <div className="row justify-content-center">
          <div
            className={`${UserPageStyle.orgCard} gx-5`}
            style={{ width: "18rem" }}
          >
            <img
              src={UN}
              className="card-img-top"
              alt="Org 1"
              style={{ padding: "0px" }}
            />
            <div className={`${UserPageStyle.cardBody}`}>
              <p className={`${UserPageStyle.cardText}`}>June 11, 1868</p>
              <p className={`${UserPageStyle.cardTitle}`}>
                Can hope survive without UNRWA’s support for refugees ?!
              </p>
              <p className={`${UserPageStyle.cardText}`}>
                We provide assistance, protection, and advocacy to over <br />
                5.9 million Palestine refugees.
              </p>
              <a
                href="/UNDetailsForIndviual"
                className={`${UserPageStyle.readMore}`}
              >
                Show More
              </a>
            </div>
          </div>

          <div
            className={`${UserPageStyle.orgCard} gx-5`}
            style={{ width: "18rem" }}
          >
            <img src={RedCrescent} className="card-img-top" alt="Org 2" />
            <div className={`${UserPageStyle.cardBody}`}>
              <p className={`${UserPageStyle.cardText}`}>June 11, 1868</p>
              <p className={`${UserPageStyle.cardTitle}`}>
                How can be the first hand to reach people in times of crisis !
              </p>
              <p className={`${UserPageStyle.cardText}`}>
                An independent, recognized National Society within the <br />
                Red Cross and Red Crescent Movement.
              </p>

              <a
                href="/RedCrescentDetailsForIndviual"
                className={`${UserPageStyle.readMore}`}
              >
                Show More
              </a>
            </div>
          </div>

          <div
            className={`${UserPageStyle.orgCard} gx-5`}
            style={{ width: "18rem" }}
          >
            <img src={Uniesf} className="card-img-top" alt="Org 3" />
            <div className={`${UserPageStyle.cardBody}`}>
              <p className={`${UserPageStyle.cardText}`}>June 11, 1868</p>
              <p className={`${UserPageStyle.cardTitle}`}>
                How did we get 1M+ visitors in 30 days without anything !
              </p>
              <p className={`${UserPageStyle.cardText}`}>
                We will remain and continue supporting children. <br />
                If others step back, who will stand for them?
              </p>

              <a
                href="/UnisefDetailsForIndviual"
                className={`${UserPageStyle.readMore}`}
              >
                Show More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <ul className="pagination">
            <li className={`${UserPageStyle.pageItem}`}>
              <a className={`page-link ${UserPageStyle.pageLink}`} href="#">
                &lt;
              </a>
            </li>
            <li className={`${UserPageStyle.pageItem} active`}>
              <a className={`page-link ${UserPageStyle.pageLink}`} href="#">
                1
              </a>
            </li>
            <li className={`${UserPageStyle.pageItem}`}>
              <a className={`page-link ${UserPageStyle.pageLink}`} href="#">
                2
              </a>
            </li>
            <li className={`${UserPageStyle.pageItem}`}>
              <a className={`page-link ${UserPageStyle.pageLink}`} href="#">
                3
              </a>
            </li>
            <li className={`${UserPageStyle.pageItem}`}>
              <a className={`page-link ${UserPageStyle.pageLink}`} href="#">
                ...
              </a>
            </li>
            <li className={`${UserPageStyle.pageItem}`}>
              <a className={`page-link ${UserPageStyle.pageLink}`} href="#">
                9
              </a>
            </li>
            <li className={`${UserPageStyle.pageItem}`}>
              <a className={`page-link ${UserPageStyle.pageLink}`} href="#">
                &gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default UserPage;
