import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../resourse/cssModules/OrganizationsSection.module.css";
import Global from "../resourse/cssModules/Globals.module.css";
import Logo from "../resourse/imgs/Mask Group 2.png";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import UN from "../resourse/imgs/UN.jpg";
import Uniesf from "../resourse/imgs/Uniesf.jpg";
import { NavLink } from "react-router-dom";

const OrganizationsSection = () => {
  return (
    <section className={`${styles.organizationsSection} py-5`} id="OrganizationsSection">
      <div className={`${Global.container}`}>
        <div className="d-flex flex-wrap flex-row align-items-center justify-content-between gap-4">

          {/* صورة الشعار */}
          <div className={`${styles.imageCol}`}>
            <div className={styles.imageWrapper}>
              <img
                src={Logo}
                alt="Organizations"
                className={`img-fluid rounded ${styles.logoImage}`}
                style={{ maxWidth: "800px", height: "auto" }} // تصغير الصورة
              />
            </div>
          </div>

          {/* محتوى المنظمات */}
          <div className="flex-grow-1 text-start">
            <h3 className={`${styles.sectionTitle} mb-4 text-start`}>
              OUR Organizations
            </h3>

            {/* Red Crescent */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={RedCrescent}
                className={`me-2 ${styles.orgLogo}`}
                alt="Red Crescent"
              />
              <h5 className="mb-0 text-black text-start">Red Crescent</h5>
            </div>
            <p className={`${styles.orgDescription} mb-4 text-start`}>
              An independent, recognized National Society within the <br />
              Red Cross and Red Crescent Movement.
            </p>

            {/* UNRWA */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={UN}
                className={`me-2 ${styles.orgLogo}`}
                alt="UNHCR"
              />
              <h5 className="mb-0 text-black text-start">Unrwa</h5>
            </div>
            <p className={`${styles.orgDescription} mb-4 text-start`}>
              We provide assistance, protection, and advocacy to over <br />
              5.9 million Palestine refugees.
            </p>

            {/* UNICEF */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={Uniesf}
                className={`me-2 ${styles.orgLogo}`}
                alt="UNICEF"
              />
              <h5 className="mb-0 text-black text-start">UNICEF</h5>
            </div>
            <p className={`${styles.orgDescription} mb-4 text-start`}>
              We will remain and continue supporting children. <br />
              If others step back, who will stand for them?
            </p>

            {/* زر المزيد */}
            <div className="text-start">
              <NavLink
                to="/UserPage"
                className={`btn btn-danger btn-lg ${styles.moreBtn}`}
              >
                More
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
