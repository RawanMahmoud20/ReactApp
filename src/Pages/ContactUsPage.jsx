import { Fragment } from "react/jsx-runtime";
import NavBar from "../Components/NavBar";
import ContactSection from "../Components/ContactSection";
import OrgNavBar from "../Components/OrgNavBar";

const ContactUsPage = () => {
  // الحصول على نوع المستخدم من localStorage
  const userType = localStorage.getItem("userType"); // القيمة يجب أن تكون "org" أو "individual"
  return (
    <Fragment>
    {userType === "organization" ? <OrgNavBar /> : <NavBar />}
      <ContactSection />
    </Fragment>
  );
};
export default ContactUsPage;
