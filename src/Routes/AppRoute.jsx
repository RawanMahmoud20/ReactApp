import { Navigate, Route, Routes } from "react-router-dom";
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
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import CitizenRegistration from "../Components/CitizenRegistration";
import Error from "../Components/Error";
import RegisteredUserReports from "../Components/RegisteredUserReports";
import OrgDetails from "../Pages/OrgDetails";

const AppRoutes = () => {
  const auth = useContext(AuthContext);
  return (
    <Routes>
      {/* الصفحة الوحيدة المسموح بها بدون تسجيل دخول */}
      <Route path="/" element={<HomePage />} />
      <Route path="/Error" element={<Error />} />
      <Route
        path="/RegisteredUserReports"
        element={<RegisteredUserReports />}
      />
      <Route path="/OrgDetails/:orgName" element={<OrgDetails />} />

      {/* الصفحات المسموح بها بدون تسجيل دخول */}
      <Route
        path="/Login"
        element={auth.loggedIn ? <Navigate to="/UserPage" /> : <Login />}
      />
      <Route path="/Register" element={<Register />} />

      {/* الصفحات الأخرى جميعها تتطلب تسجيل دخول */}
      <Route
        path="/UserProfile"
        element={auth.loggedIn ? <UserProfile /> : <Navigate to="/Login" />}
      />
      <Route
        path="/OrganizationProfile"
        element={
          auth.loggedIn ? <OrganizationProfile /> : <Navigate to="/Login" />
        }
      />
      <Route
        path="/OrganizationPage"
        element={
          auth.loggedIn ? <OrganizationPage /> : <Navigate to="/Login" />
        }
      />
      <Route
        path="/RedCrescentDetailsForIndviual"
        element={
          auth.loggedIn ? (
            <RedCrescentDetailsForIndviual />
          ) : (
            <Navigate to="/Login" />
          )
        }
      />
      <Route
        path="/UNDetailsForIndviual"
        element={
          auth.loggedIn ? <UNDetailsForIndviual /> : <Navigate to="/Login" />
        }
      />
      <Route
        path="/OrganizationsSection"
        element={
          auth.loggedIn ? <OrganizationsSection /> : <Navigate to="/Login" />
        }
      />
      <Route
        path="/UnisefDetailsForIndviual"
        element={
          auth.loggedIn ? (
            <UnisefDetailsForIndviual />
          ) : (
            <Navigate to="/Login" />
          )
        }
      />
      <Route
        path="/AddCategory"
        element={auth.loggedIn ? <AddCategory /> : <Navigate to="/Login" />}
      />

      {/* <Route
        path="/AddCategoryDelails"
        element={
          auth.loggedIn ? <AddCategoryDelails /> : <Navigate to="/Login" />
        }
      /> */}
      <Route
        path="/AddCategoryDelails/:orgName"
        element={
          auth.loggedIn ? <AddCategoryDelails /> : <Navigate to="/Login" />
        }
      />

      <Route
        path="/UserPage"
        element={auth.loggedIn ? <UserPage /> : <Navigate to="/Login" />}
      />
      <Route
        path="/DistributionLocationsPage"
        element={
          auth.loggedIn ? (
            <DistributionLocationsPage />
          ) : (
            <Navigate to="/Login" />
          )
        }
      />

      <Route
        path="/ContactUsPage"
        element={auth.loggedIn ? <ContactUsPage /> : <Navigate to="/Login" />}
      />
      <Route
        path="/Notifications"
        element={auth.loggedIn ? <Notifications /> : <Navigate to="/Login" />}
      />
      <Route
        path="/CitizenRegistration"
        element={
          auth.loggedIn ? <CitizenRegistration /> : <Navigate to="/Login" />
        }
      />

      {/* حماية الصفحات الفرعية لـ HomePage */}
      <Route
        path="/HomePage"
        element={auth.loggedIn ? <HomePage /> : <Navigate to="/Login" />}
      >
        <Route path="About" element={<About />} />
        <Route path="OrganizationsSection" element={<OrganizationsSection />} />
        <Route path="LocationsSection" element={<LocationsSection />} />
        <Route path="ContactSection" element={<ContactSection />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
