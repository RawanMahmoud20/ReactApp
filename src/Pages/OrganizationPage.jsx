import { Fragment } from "react";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../resourse/cssModules/OrganizationPage.module.css";
const OrganizationPage = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={`container ${styles.container}`}>
        <h2>Add Organizations Category</h2>
        <div className={styles.containerBox}>
          <div
            className="d-flex justify-content-center align-items-center mb-4"
            style={{ width: "100%" }}
          >
            <div
              className={` text-white mb-3 ${styles.uploadBox}`}
            >
                            <i className="fa-solid fa-camera text-white " style={{ top: '40%' }}></i>

                        Upload or drag photos here  

            </div>
          
          </div>

          <div className="d-flex justify-content-center mb-4">
            <textarea
              className={styles.styledTextarea}
              rows="4"
              placeholder="Add Information about Organizations"
            ></textarea>
          </div>

          <div className={`${styles.orgCard} gx-5`}>
            <div className={`${styles.uploadBox} text-white mb-3`}>
              <i className="fa-solid fa-camera" style={{ color: "white" }}></i>
              Upload or drag photos here
            </div>
            <div className={`card-body ${styles.cardBody}`}>
              <input className={styles.cardTitle} placeholder="   Add Name" />
              <textarea
                rows="4"
                cols="32"
                className={`form-control ${styles.cardText}`}
                defaultValue="The description about Organizations that user input"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <button className={styles.saveBtn}>Save</button>
          </div>
        </div>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <ul className={styles.pagination}>
          <li className="page-item">
            <a className={`page-link ${styles.pageLink}`} href="#">
              &lt;
            </a>
          </li>
          <li className="page-item active">
            <a className={`page-link ${styles.pageLink}`} href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.pageLink}`} href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.pageLink}`} href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.pageLink}`} href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.pageLink}`} href="#">
              9
            </a>
          </li>
          <li className="page-item">
            <a className={`page-link ${styles.pageLink}`} href="#">
              &gt;
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default OrganizationPage;
