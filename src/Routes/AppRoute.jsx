import { Route, Routes } from "react-router-dom";
import UserPage from "../Pages/UserPage";
import OrganizationPage from "../Pages/OrganizationPage";
import HomePage from "../Pages/HomePage";
import About from "../Components/About";
import OrganizationsSection from "../Components/OrganizationsSection";
import LocationsSection from "../Components/LocationsSection";
import ContactSection from "../Components/ContactSection";
import Login from "../Components/Login";
import Register from "../Components/Register";
import RedCrescentDetailsForIndviual from "../Components/RedCrescentDetailsForIndviual";
import UNDetailsForIndviual from "../Components/UNDetailsForIndviual";
import UnisefDetailsForIndviual from "../Components/UnisefDetailsForIndviual";
import AddCategory from "../Components/AddCategory";
import AddCategoryDelails from "../Components/AddCategoryDelails";
import DistributionLocationsPage from "../Pages/DistributionLocationsPage";
import ContactUsPage from "../Pages/ContactUsPage";
import UserProfile from "../Components/UserProfile";
import OrganizationProfile from "../Components/OrganizationProfile";
import Notifications from "../Components/Notifications";
import CitizenRegistration from "../Components/CitizenRegistration";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/OrganizationPage" element={<OrganizationPage />} />
      <Route path="/HomePage" element={<HomePage />}>
        <Route path="/HomePage/About" element={<About />} />
        <Route
          path="/HomePage/OrganizationsSection"
          element={<OrganizationsSection />}
        />
        <Route
          path="/HomePage/LocationsSection"
          element={<LocationsSection />}
        />
        <Route path="/HomePage/ContactSection" element={<ContactSection />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route
        path="/RedCrescentDetailsForIndviual"
        element={<RedCrescentDetailsForIndviual />}
      />
      <Route path="/UNDetailsForIndviual" element={<UNDetailsForIndviual />} />
      <Route
        path="/UnisefDetailsForIndviual"
        element={<UnisefDetailsForIndviual />}
      />
      <Route path="/AddCategory" element={<AddCategory />} />
      <Route path="/AddCategoryDelails" element={<AddCategoryDelails />} />
      <Route path="/UserPage" element={<UserPage />} />
      <Route
        path="/DistributionLocationsPage"
        element={<DistributionLocationsPage />}
      />
      <Route path="/ContactUsPage" element={<ContactUsPage />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/OrganizationProfile" element={<OrganizationProfile />} />
      <Route path="/Notifications" element={<Notifications />} />
      <Route path="/CitizenRegistration" element={<CitizenRegistration />} />
      <Route path="/ContactSection" element={<ContactSection />} />
    </Routes>
  );
};
export default AppRoutes;
