import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import Logo from "../resourse/imgs/Uniesf.jpg";
import health from "../resourse/imgs/health.jpg";
import Food from "../resourse/imgs/Food.jpg";
import Homeless from "../resourse/imgs/homeless.jpg";
import Financial from "../resourse/imgs/Financial .jpg";
import AddCategoryStyle from "../resourse/cssModules/AddCategory.module.css";
import { NavLink } from "react-router-dom";
const UnisefDetailsForIndviual = () => {
  return (
    <Fragment>
      <NavBar />
      <main className={`${AddCategoryStyle.container} my-5 p-4 bg-white rounded-4 text-center shadow`}>
        <h2 className={`${AddCategoryStyle.title}`}>Uniesf Organization</h2>
        <img
          src={Logo}
          alt="Uniesf Logo"
          className={`my-3 ${AddCategoryStyle.my3}`}
          // style={{ width: "400px", height: "300px" }}
        />
        <p className={`${AddCategoryStyle.info}`}>
          We will remain and continue supporting children.
          <br />
          If others step back, who will stand for them
        </p>
        <div className={`card ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`} >
          <h3>
            <img src={health} className={`${AddCategoryStyle.icon}`} alt="logo" />
            Medical Assistance
            <span className={`${AddCategoryStyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We help cover treatment costs and essential medications for those in
            need
          </p>
          <NavLink className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`} to="/CitizenRegistration">
            register
          </NavLink>
        </div>
        <div className={`card ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`} >
          <h3>
            <img src={Food} className={`${AddCategoryStyle.icon}`} alt="logo" />
            Food Assistance
            <span className={`${AddCategoryStyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We provide food packages to needy families to ensure food security
          </p>
          <NavLink className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`} to="/CitizenRegistration">
            register
          </NavLink>
        </div>
        <div className={`card ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`} >
          <h3>
            <img src={Homeless} className={`${AddCategoryStyle.icon}`} alt="logo" />
            Housing Assistance
            <span className={`${AddCategoryStyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We offer housing support through rent assistance or safe temporary
            shelter
          </p>
          <NavLink className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`} to="/CitizenRegistration">
            register
          </NavLink>
        </div>
        <div className={`card ${AddCategoryStyle.cardCustom} p-3 mb-3 text-start`} >
          <h3>
            <img src={Financial} className={`${AddCategoryStyle.icon}`} alt="logo" />
            Financial Assistance
            <span className={`${AddCategoryStyle.rating}`}>★★★★★</span>
          </h3>
          <p>
            We provide financial support to ease the living burdens of those in
            need{" "}
          </p>
          <NavLink className={`btn ${AddCategoryStyle.btndanger} text-white ms-2`} to="/CitizenRegistration">
            register
          </NavLink>
        </div>
      </main>
    </Fragment>
  );
};
export default UnisefDetailsForIndviual;
