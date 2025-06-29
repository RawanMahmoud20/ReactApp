import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../resourse/cssModules/OrganizationsSection.module.css";
import Global from "../resourse/cssModules/Globals.module.css";
import Logo from "../resourse/imgs/Mask Group 2.png";
import RedCrescent from "../resourse/imgs/Red Crescent.png";
import UN from "../resourse/imgs/UN.jpg";
import Uniesf from "../resourse/imgs/Uniesf.jpg";

const OrganizationsSection = () => {
  return (
    <section className={`${styles.organizationsSection} py-5`} id="OrganizationsSection">
      <div className={`${Global.container}`}>
        <div className="row align-items-center">
          <div
            className={`col-md-5 mb-7 mb-md-0 ${styles.imageCol}`}
          >
            <div className={styles.imageWrapper}>
              <img
                src={Logo}
                alt="Organizations"
                className={`img-fluid rounded ${styles.logoImage}`}
              />
            </div>
          </div>

          <div className={`col-md-4 ps-md-5${styles.centerOnMobile}`} style={{marginLeft: "150px"}}>
            <h3 className={`${styles.sectionTitle} mb-4`}>OUR Organizations</h3>

            <div className="d-flex align-items-center mb-2">
              <img
                src={RedCrescent}
                className={`me-2 ${styles.orgLogo}`}
                alt="Red Crescent"
              />
              <h5 className="mb-0 text-black">Red Crescent</h5>
            </div>
            <p className={`${styles.orgDescription} mb-4`}>
              An independent, recognized National Society within the <br />
              Red Cross and Red Crescent Movement.
            </p>

            <div className="d-flex align-items-center mb-2">
              <img src={UN} className={`me-2 ${styles.orgLogo}`} alt="UNHCR" />
              <h5 className="mb-0 text-black">Unrwa</h5>
            </div>
            <p className={`${styles.orgDescription} mb-4`}>
              We provide assistance, protection, and advocacy to over <br />
              5.9 million Palestine refugees.
            </p>

            <div className="d-flex align-items-center mb-2">
              <img src={Uniesf} className={`me-2 ${styles.orgLogo}`} alt="UNICEF" />
              <h5 className="mb-0 text-black">UNICEF</h5>
            </div>
            <p className={`${styles.orgDescription} mb-4`}>
              We will remain and continue supporting children. <br />
              If others step back, who will stand for them?
            </p>

            <a
              href="../Pages/OrganizationPage"
              className={`btn btn-danger btn-lg ${styles.moreBtn}`}
            >
              More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
