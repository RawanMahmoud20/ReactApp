import { Fragment, useContext, useRef, useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../resourse/cssModules/OrganizationPage.module.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import OrgNavBar from "../Components/OrgNavBar";

const OrganizationPage = () => {
  const { registerAs } = useContext(AuthContext);
  const [orgName, setOrgName] = useState("");
  const [orgDesc, setOrgDesc] = useState("");
  const [orgImage, setOrgImage] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const [orgDate, setOrgDate] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("newOrg");
    if (savedData) {
      const { name, description, image } = JSON.parse(savedData);
      setOrgName(name || "");
      setOrgDesc(description || "");
      setOrgImage(image || null);
    }
  }, []);
  // تحميل الصورة
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 0.1, // حجم الصورة بعد الضغط أقل من 0.1 ميجابايت
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();
      reader.onloadend = () => setOrgImage(reader.result);
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("خطأ في ضغط الصورة:", error);
    }
  };

  // حفظ البيانات
  const handleSave = () => {
    const formattedName = orgName.trim().replace(/\s+/g, ""); // احذف الفراغات
    // إزالة الفراغات
    const newOrg = {
      name: orgName.trim(), // نزيل الفراغات من البداية والنهاية
      description: orgDesc,
      image: orgImage,
      date: orgDate,
      link: `/OrgDetails/${formattedName}`,
    };
    let orgs = JSON.parse(localStorage.getItem("newOrgs") || "[]");
    orgs.push(newOrg);
    localStorage.setItem("newOrgs", JSON.stringify(orgs));
    localStorage.setItem("newOrg", JSON.stringify(newOrg));

    navigate("/UserPage");
  };
  return (
    <Fragment>
      <OrgNavBar />
      <div className={`container ${styles.container}`}>
        <h2>Add Organizations Category</h2>
        <div className={styles.containerBox}>
          {/* رفع الصورة */}
          <div
            className="d-flex justify-content-center align-items-center mb-4"
            style={{ width: "100%" }}
          >
            <div
              className={`text-white mb-3 ${styles.uploadBox}`}
              onClick={() => fileInputRef.current.click()}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <i
                className="fa-solid fa-camera text-white"
                style={{ fontSize: "28px" }}
              ></i>
              <p>Upload or drag photos here</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* الوصف */}
          <div className="d-flex justify-content-center mb-4">
            <textarea
              className={styles.styledTextarea}
              rows="4"
              placeholder="Add Information about Organizations"
              value={orgDesc}
              onChange={(e) => setOrgDesc(e.target.value)}
            ></textarea>
          </div>

          {/* كارد العرض */}
          <div className={`${styles.orgCard} gx-5`}>
            <div
              className={`${styles.uploadBox} text-white mb-3`}
              style={{ padding: 0 }}
            >
              {orgImage ? (
                <img
                  src={orgImage}
                  alt="Organization"
                  style={{
                    width: "100%",
                    height: "212px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    position: "relative",
                    top: "15px",
                  }}
                />
              ) : (
                <div className="text-center py-4">
                  <i
                    className="fa-solid fa-camera"
                    style={{ color: "white" }}
                  ></i>
                  <p>Image will appear here</p>
                </div>
              )}
            </div>

            <div className={`card-body ${styles.cardBody}`}>
              <input
                className={styles.cardTitle}
                placeholder="Add Name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />

              <input
                type="date"
                className={`${styles.cardText}`}
                value={orgDate}
                onChange={(e) => setOrgDate(e.target.value)}
                placeholder="Select Date"
                style={{ width: "100%" }}
              />

              <textarea
                rows="4"
                cols="32"
                className={`form-control ${styles.cardText}`}
                value={orgDesc}
                readOnly
              />
            </div>
          </div>

          {/* زر الحفظ */}
          <div className="text-center mt-4">
            <button className={styles.saveBtn} onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrganizationPage;
