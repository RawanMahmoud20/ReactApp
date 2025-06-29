import { Fragment } from "react/jsx-runtime";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Flag from "../resourse/imgs/Flag.png";
import OrganizationProfileStyle from "../resourse/cssModules/UserProfile.module.css";

const OrganizationProfile = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        className={`container-fluid p-5 bg-primary text-white text-center login-cover ${OrganizationProfileStyle.loginCover}`}
      ></div>
      <div className={`container py-5 ${OrganizationProfileStyle.container}`}>
        <div className={`${OrganizationProfileStyle.profileCard}`}>
          <div className={`${OrganizationProfileStyle.profileInfo}`}>
            <i className="fa-solid fa-user fa-2x "></i>
            <div>
              <div style={{ padding: "10px" }}>
                <strong>Organization name</strong>
              </div>
              <div style={{ padding: "10px" }}>
                <img
                  className={`${OrganizationProfileStyle.ProfileImge}`}
                  src={Flag}
                  alt="User image"
                />{" "}
                PS at
                <span className="text-primary">Organization name</span>
              </div>
              <div className={`${OrganizationProfileStyle.email}`}>
                Email ex@.com
              </div>
            </div>
          </div>
          <div className="mt-3 mt-md-0">| Joined Alibaba.com in 2025</div>
        </div>

        <div className={`aid-card ${OrganizationProfileStyle.aidCard}`}>
          <h5>Service name</h5>
          <p>
            Number of registrants: <span>Exxxxxx</span>
          </p>
          <p>
            Number of beneficiaries: <span>Exxxxxx</span>
          </p>
        </div>

        <div className={`aid-card ${OrganizationProfileStyle.aidCard}`}>
          <h5>Service name</h5>
          <p>
            Number of registrants: <span>Exxxxxx</span>
          </p>
          <p>
            Number of beneficiaries: <span>Exxxxxx</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default OrganizationProfile;
