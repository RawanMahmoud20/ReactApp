import { Fragment } from "react/jsx-runtime";
import NavBarStyle from "../resourse/cssModules/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

const OrgNavBar = () => {
//   let auth = useContext(AuthContext);
//   const { unreadNotifications , setUnreadNotifications } = useContext(NotificationContext);
// const handleNotificationsClick = () => {
//   setUnreadNotifications(0); // إعادة تعيين الرقم للصفر
// };
const userType = localStorage.getItem("userType");
  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top shadow px-5 ${NavBarStyle.navbar}`}>
        <div className="container-fluid">
           <div className="nav-item" style={{marginRight: "10px"}}>
                {/* <NavLink className="nav-link" to="/UserProfile">
                  <i className="fa-solid fa-user"></i>
                </NavLink> */}
            <NavLink className="nav-link" to="/OrganizationProfile">
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
                to="/OrganizationPage"
                className={(props) =>
                  props.isActive ? `nav-link underline-red active ${NavBarStyle.underlineRed}` : "nav-link"
                }
                aria-current="page"
                end
              >
                Add Organization Category
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
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default OrgNavBar;
