import { Fragment } from "react/jsx-runtime";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Flag from "../resourse/imgs/Flag.png";
import UserProfileStyle from "../resourse/cssModules/UserProfile.module.css";

const UserProfile = () => {
  return (
    <Fragment>
      <NavBar />
      <div
        className={`container-fluid p-5 bg-primary text-white text-center login-cover ${UserProfileStyle.loginCover}`}
      ></div>
      <div className={`container py-5 ${UserProfileStyle.container}`}>
        <div className={`${UserProfileStyle.profileCard}`}>
          <div className={`${UserProfileStyle.profileInfo}`}>
            <i className="fa-solid fa-user fa-2x "></i>
            <div>
              <div style={{ padding: "10px" }}>
                <strong>Username</strong>
              </div>
              <div style={{ padding: "10px" }}>
                <img
                  className={`${UserProfileStyle.ProfileImge}`}
                  src={Flag}
                  alt="User image"
                />
                PS at
                <span className="text-primary">Username</span>
              </div>
              <div className={`${UserProfileStyle.email}`}>Email ex@.com</div>
            </div>
          </div>
          <div className="mt-3 mt-md-0">| Joined Alibaba.com in 2025</div>
                    <i className="fa-solid fa-user"></i>

        </div>

        <div className={`aid-card ${UserProfileStyle.aidCard}`}>
          <h5>Registered aid information</h5>
          <p>
            Organization name: <span>Exxxxxx</span>
          </p>
          <p>
            Category: <span>Exxxxxx</span>
          </p>
          <p>
            Registration date: <span>Exxxxxx</span>
          </p>
          <p>
            Registration status: <span>Exxxxxx</span>
          </p>
        </div>

        <div className={`aid-card ${UserProfileStyle.aidCard}`}>
          <h5>Registered aid information</h5>
          <p>
            Organization name: <span>Exxxxxx</span>
          </p>
          <p>
            Category: <span>Exxxxxx</span>
          </p>
          <p>
            Registration date: <span>Exxxxxx</span>
          </p>
          <p>
            Registration status: <span>Exxxxxx</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default UserProfile;
