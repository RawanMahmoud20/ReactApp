import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import AddCategorystyle from "../resourse/cssModules/AddCategory.module.css";
import health from "../resourse/imgs/health.jpg";
const AddCategory = () => {
  return (
    <Fragment>
      <NavBar />
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

        <div className={`card card-custom p-3 mb-3 text-start`}>
          <h3>
            <img
              src={health}
              className={`${AddCategorystyle.icon}`}
              alt="logo"
            />
            Health
            <span className={`${AddCategorystyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We help cover treatment costs and essential medications for those in
            need
          </p>
        </div>

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
