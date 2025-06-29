import { Fragment } from "react";
import vibrantBackground from "../resourse/imgs/cover/vibrant-background.png";
import styles from "../resourse/cssModules/LocationsSection.module.css";
const LocationsSection = () => {
  return (
    <Fragment>
      <section
        className={`${styles.LocationsSection} py-5 position-relative`}
        
        id="LocationsSection"
      >
        <div className={`container text-start ${styles.container}`} style={{ zIndex: 2 }}>
          <h3
            className={`${styles.sectionTitle} position-relative`}
            style={{ color: "white", zIndex: 3}}
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

          <div className={`map-container mt-4 position-relative map-responsive ${styles.mapContainer}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476586.7481676893!2d34.25228458234486!3d31.952162739719923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502c2a0cf68f8ed%3A0xf7b08f3124047a1d!2sPalestine!5e0!3m2!1sen!2s!4v1716216021804!5m2!1sen!2s"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Distribution Location Map"
            ></iframe>
            <div className={`${styles.locationBox} text-start bg-white p-3 shadow rounded-4`}>
              <div className="d-flex align-items-center mb-2">
                <img src={vibrantBackground} alt="Aid Icon" />
                <ul className="mb-0 ps-3">
                  <strong className="fs-5 text-dark">The Location</strong>
                  <li>
                    <strong>Aid Name:</strong> Example Aid
                  </li>
                  <li>
                    <strong>Address:</strong> Gaza City
                  </li>
                  <li>
                    <strong>Date:</strong> May 25, 2025
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
