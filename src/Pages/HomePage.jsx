import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import OrganizationsSection from "../Components/OrganizationsSection";
import LocationsSection from "../Components/LocationsSection";
import ContactSection from "../Components/ContactSection";
const HomePage = () => {
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
