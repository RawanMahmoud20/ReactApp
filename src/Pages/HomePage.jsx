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
const HomePage = () => {
  let auth = useContext(AuthContext);
  return (
    <Fragment>
      <NavBar />
      <About />
      <OrganizationsSection />
      <LocationsSection />
      <ContactSection />
    </Fragment>
  );
};
export default HomePage;
