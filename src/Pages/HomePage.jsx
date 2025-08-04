import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import OrganizationsSection from "../Components/OrganizationsSection";
import LocationsSection from "../Components/LocationsSection";
import ContactSection from "../Components/ContactSection";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import OrgNavBar from "../Components/OrgNavBar";
const HomePage = () => {
  let auth = useContext(AuthContext);
    const userData = JSON.parse(localStorage.getItem("userData"));
  const userType = userData?.userType;

  return (
    <Fragment>
  {userType === "Organization" ? <OrgNavBar /> : <NavBar />}
      <About />
      <OrganizationsSection />
      <LocationsSection />
      <ContactSection />
    </Fragment>
  );
};
export default HomePage;
