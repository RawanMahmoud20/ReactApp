import { Fragment } from "react/jsx-runtime";
import NavBarStyle from "../resourse/cssModules/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NotificationContext } from "../Context/NotificationContext";

const NavBar = () => {
  let auth = useContext(AuthContext);
  const { unreadNotifications , setUnreadNotifications } = useContext(NotificationContext);
  const userType = localStorage.getItem("userType"); // "org" أو "individual"
const handleNotificationsClick = () => {
  setUnreadNotifications(0); // إعادة تعيين الرقم للصفر
};
  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top shadow px-5 ${NavBarStyle.navbar}`}>
        <div className="container-fluid">
           <div className="nav-item" style={{marginRight: "10px"}}>
                <NavLink className="nav-link" to={userType === "organization" ? "/OrganizationProfile" : "/UserProfile"}>
              <i className="fa-solid fa-user"></i>
            </NavLink>
              </div>
          <NavLink className="navbar-brand fw-bold" to="#">
            <span className="text-dark">Help</span>
            <span className={`text-danger`}>Hive</span>
          </NavLink>
          <button
            className={`navbar-toggler ${NavBarStyle.navbarToggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                to="/HomePage"
                className={(props) =>
                  props.isActive ? `nav-link underline-red active ${NavBarStyle.underlineRed}` : "nav-link"
                }
                aria-current="page"
                end
              >
                ABOUT
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                to="/UserPage"
                className={(props) =>
                  props.isActive ? `nav-link underline-red active ${NavBarStyle.underlineRed}` : "nav-link"
                }
                aria-current="page"
                end
              >
                Our Organizations
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                to="/DistributionLocationsPage"
                className={(props) =>
                  props.isActive ? `nav-link underline-red active ${NavBarStyle.underlineRed}` : "nav-link"
                }
                aria-current="page"
                end
              >
                Distribution Locations
              </NavLink>
              </li>
              <li className="nav-item">
                
                <NavLink
                  className={`btn btn-danger text-white ms-2  ${NavBarStyle.textDanger}`}
                  to="/ContactUsPage"
                >
                  CONTACT US
                </NavLink>
              </li>
             <li className="nav-item position-relative" onClick={handleNotificationsClick}>
  <NavLink className="nav-link" to="/Notifications">
    <i className="fa-regular fa-bell"></i>
    {unreadNotifications > 0 && (
      <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${NavBarStyle.smallBadge}`}>
        {unreadNotifications}
      </span>
    )}
  </NavLink>
</li>

              {/* <li className="nav-item" onClick={handleNotificationsClick}>
                <NavLink className="nav-link" to="/Notifications">
                <i className="fa-regular fa-bell"></i>
                  {unreadNotifications > 0 && (
                      <span className={`position-absolute translate-middle badge rounded-pill bg-danger ${NavBarStyle.smallBadge}`}>
                        {unreadNotifications}
                      </span>
                    )}
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default NavBar;
