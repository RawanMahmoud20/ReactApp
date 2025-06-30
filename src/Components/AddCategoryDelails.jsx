import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import health1 from "../resourse/imgs/health1.jpg";
import AddCategoryDelailsStyle from "../resourse/cssModules/AddCategoryDelails.module.css";
const AddCategoryDelails = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={`${AddCategoryDelailsStyle.container}`}>
        <h2>Add Category Delails</h2>

        <div className={`container-box ${AddCategoryDelailsStyle.containeBox} `}>
          <img src={RedCrescent} className={`card-img-top${AddCategoryDelailsStyle.cardImgTop}`} alt="Org 2" />
          <div className="d-flex justify-content-center mb-4">
            <p className="org-description mb-4">
              An independent, recognized National Society within the <br />
              Red Cross and Red Crescent Movement.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className={`${AddCategoryDelailsStyle.orgCard}`}>
                <div className={`${AddCategoryDelailsStyle.uploadBox} text-white mb-3`}>
                  <i
                    className="fa-solid fa-camera fa-2x mb-2"
                    style={{ color: "white" }}
                  ></i>
                  <span>Upload or drag photos here</span>
                </div>

                <div className={`${AddCategoryDelailsStyle.cardBody}`}>
                  <input
                    className={`card-title ${AddCategoryDelailsStyle.cardTitle}  form-control mb-2`}
                    placeholder="Add Name"
                  />
                  <textarea rows="4" className={`card-text ${AddCategoryDelailsStyle.cardText} form-control`}>
                    The description about Organizations that user input
                  </textarea>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className={`${AddCategoryDelailsStyle.orgCard}`}>
                <img
                  src={health1}
                  className="img-top"
                  style={{ width: "100%" , margin: "0px"}}
                />

                <div className={`${AddCategoryDelailsStyle.cardBody}`}>
                  <h5 className={`${AddCategoryDelailsStyle.cardTitle}`}>Health</h5>
                  <p className={`${AddCategoryDelailsStyle.cardText}`}>
                    An independent, recognized National Society within the
                    <br />
                    Red Cross and Red Crescent Movement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">

            </div>
          </div>

          <div className="text-center mt-4">
            <button className={`save-btn ${AddCategoryDelailsStyle.saveBtn}`}>Save</button>
          </div>
        </div>
      </div>

      <div className="mt-5 d-flex justify-content-center">
            <ul className="pagination">
            <li className={`${AddCategoryDelailsStyle.pageItem}`}>
              <a className={`page-link ${AddCategoryDelailsStyle.pageLink}`} href="#">
                &lt;
              </a>
            </li>
            <li className={`${AddCategoryDelailsStyle.pageItem} active`}>
              <a className={`page-link ${AddCategoryDelailsStyle.pageLink}`} href="#">
                1
              </a>
            </li>
            <li className={`${AddCategoryDelailsStyle.pageItem}`}>
              <a className={`page-link ${AddCategoryDelailsStyle.pageLink}`} href="#">
                2
              </a>
            </li>
            <li className={`${AddCategoryDelailsStyle.pageItem}`}>
              <a className={`page-link ${AddCategoryDelailsStyle.pageLink}`} href="#">
                3
              </a>
            </li>
            <li className={`${AddCategoryDelailsStyle.pageItem}`}>
              <a className={`page-link ${AddCategoryDelailsStyle.pageLink}`} href="#">
                ...
              </a>
            </li>
            <li className={`${AddCategoryDelailsStyle.pageItem}`}>
              <a className={`page-link ${AddCategoryDelailsStyle.pageLink}`} href="#">
                9
              </a>
            </li>
            <li className={`${AddCategoryDelailsStyle.pageItem}`}>
              <a className={`page-link ${AddCategoryDelailsStyle.pageLink}`} href="#">
                &gt;
              </a>
            </li>
          </ul>
      </div>
    </Fragment>
  );
};
export default AddCategoryDelails;
