import { Fragment } from "react/jsx-runtime";
import NavBar from "../Components/NavBar";
import ContactSection from "../Components/ContactSection";
import OrgNavBar from "../Components/OrgNavBar";

const ContactUsPage = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
  const userType = userData?.userType;
  // الحصول على نوع المستخدم من localStorage
  // const userType = localStorage.getItem("userData"); // القيمة يجب أن تكون "org" أو "individual"
  return (
    <Fragment>
      {userType === "Organization" ? <OrgNavBar /> : <NavBar />}
      <ContactSection />
    </Fragment>
  );
};
export default ContactUsPage;
