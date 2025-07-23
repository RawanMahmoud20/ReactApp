import { Fragment, useContext } from "react";
import vibrantBackground from "../resourse/imgs/cover/vibrant-background.png";
import styles from "../resourse/cssModules/LocationsSection.module.css";
import { NotificationContext } from "../Context/NotificationContext";

const LocationsSection = () => {
    const { notificationData } = useContext(NotificationContext);
    const latestNotification = notificationData.length > 0 ? notificationData[notificationData.length - 1] : null;

    // console.log("notificationData:", notificationData);

  return (
    <Fragment>
      <section
        className={`${styles.LocationsSection} py-5 position-relative`}
        id="LocationsSection"
      >
        <div className={`container ${styles.container}`} style={{ zIndex: 2 }}>
          <h3
            className={`${styles.sectionTitle} position-relative text-white mb-4`}
            style={{ zIndex: 3 }}
          >
            Distribution Locations
          </h3>

          <div className={styles.customCurve}>
            <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#413E65"
                fillOpacity="1"
                d="M0,400 Q720,80 1440,400 L1440,0 L0,0 Z"
              ></path>
            </svg>
          </div>

          {/* استخدم d-flex و flex-column للعرض العمودي على الجوال، و flex-row على الشاشات الأكبر */}
  <div className={`d-flex flex-column flex-lg-row align-items-start gap-4 mt-4 ${styles.mapContainer}`}>
  <div className="flex-grow-1 w-100">
    <div className="ratio ratio-16x9" style={{ margin: "0 auto" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476586.7481676893!2d34.25228458234486!3d31.952162739719923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c2a0cf68f8ed%3A0xf7b08f3124047a1d!2sPalestine!5e0!3m2!1sen!2s!4v1716216021804!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Distribution Location Map"
        style={{ border: 0 }}
      ></iframe>
    </div>
  </div>

  <div
    className={`${styles.locationBox} bg-white p-3 shadow rounded-4 flex-shrink-0 w-100 mt-3 mt-lg-0`}
    style={{ minWidth: "auto" }}
  >
    <div className="d-flex align-items-center mb-3">
      <img
        src={vibrantBackground}
        alt="Aid Icon"
        style={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
      <ul className="mb-0 ps-3">
        <strong className="fs-5 text-dark">The Location</strong>
        <li>
          <strong>Aid Name:</strong> {latestNotification.orgName}
        </li>
        <li>
          <strong>Address:</strong> {latestNotification.location}
        </li>
        <li>
          <strong>Date:</strong> {latestNotification.date}
        </li>
      </ul>
    </div>
  </div>
</div>
        </div>
      </section>
    </Fragment>
  );
};

export default LocationsSection;
