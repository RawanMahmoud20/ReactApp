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
          <span> Temporary stop </span>
          <p>
            Services are currently suspended due <br />
            to restrictions on the entry of aid into the Gaza Strip.
          </p>
          <NavLink
            className={`btn btn-danger text-white ms-2  ${Errorstyle.btnHome}`}
            to="/HomePage"
          >
            GO TO HOME
          </NavLink>

          <div class={`bottom-bar ${Errorstyle.bottomBar}`}>
            <h4>Service Temporarily Unavailable</h4>
            <p>
              We apologize for the inconvenience. The service is currently
              suspended due to restrictions on the entry of aid into the Gaza
              Strip, which are beyond our control. We are working closely with
              authorities to resolve the issue as soon as possible and resume
              services promptly.Thank you for yourpatience and understanding.
              For assistance, please contact us via the available channels.
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
