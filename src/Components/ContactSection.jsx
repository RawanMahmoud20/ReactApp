import { Fragment } from "react";
import Logo from "../resourse/imgs/ContactUs.jpg";
import styles from "../resourse/cssModules/ContactSection.module.css";  // استيراد CSS Modules
import Global from "../resourse/cssModules/Globals.module.css";  // استيراد CSS Modules

const ContactSection = () => {
  return (
    <Fragment>
      <section className={`${styles.section}`} id="ContactSection">
        <div className={styles.container}>
          <h3 className={styles.sectionTitle}>Contact us</h3>
          <div className={styles.contactBox}>
            <div className={styles.contactText}>
              <p>
                <i className="fas fa-quote-left fa-2x"></i>
              </p>
              <p>
                We're happy to hear from you!
                <br />
                For any inquiries, suggestions, or support, please contact us
                through
                <br />
                the available communication channels.Our team is ready <br />
                to respond as soon as possible.
              </p>
              <p>
                <i className="fas fa-phone"></i> Phone: 123456789 <br />
                <i className="fas fa-envelope"></i> Email: info@example.com
              </p>
              <div >
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className={`${styles.contactImg}  mt-md-0`}>
              <img
                src={Logo}
                className={Global.imgFluid}
                alt="Support Team"
                 // لاحظت خطأ في اسم الخاصية maxWidth وليس maxwidth
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactSection;
