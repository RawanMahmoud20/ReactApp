import { Fragment } from "react/jsx-runtime";
import NavBarStyle from "../resourse/cssModules/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top shadow px-5 ${NavBarStyle.navbar}`}>
        <div className="container-fluid">
           <div className="nav-item" style={{marginRight: "10px"}}>
                <a className="nav-link" href="/UserProfile">
                  <i className="fa-solid fa-user"></i>
                </a>
              </div>
          <a className="navbar-brand fw-bold" href="#">
            <span className="text-dark">Help</span>
            <span className={`text-danger`}>Hive</span>
          </a>
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
                  props.isActive ? `nav-link underline-red active ${NavBarStyle.navLink.underlineRed}` : "nav-link"
                }
                aria-current="page"
                end
              >
                Distribution Locations
              </NavLink>
              </li>
              <li className="nav-item">
                
                <a
                  className={`btn btn-danger text-white ms-2  ${NavBarStyle.textDanger}`}
                  href="/ContactUsPage"
                >
                  CONTACT US
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="/Notifications">
                <i class="fa-regular fa-bell"></i>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default NavBar;
