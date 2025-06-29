import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Errorstyle from "../resourse/cssModules/Error.module.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Fragment>
      <NavBar />
      <div class={`${Errorstyle.mainContainer}`}>
        <div class={`error-box ${Errorstyle.errorBox}`}>
          <h1>404</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, <br />
            sunt in culpa qui officia.{" "}
          </p>
           <NavLink
            className={`btn btn-danger text-white ms-2  ${Errorstyle.btnHome}`}
            to="/HomePage"
            >
            GO TO HOME
            </NavLink>

          <div class={`bottom-bar ${Errorstyle.bottomBar}`}>
            <h4>Excepteur occaecat cupidatat.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor <br />
              incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud <br />
              exercitation ullamco.
            </p>

            <div class={`social-icons ${Errorstyle.socialIcons}`}>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Error;
