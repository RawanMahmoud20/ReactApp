import { Fragment } from "react/jsx-runtime";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Flag from "../resourse/imgs/Flag.png";
import OrganizationProfileStyle from "../resourse/cssModules/UserProfile.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { updateEmail } from "firebase/auth";

const OrganizationProfile = () => {
    let auth = useContext(AuthContext);
    let {user , updateUserInfo} = useContext(AuthContext);
      const [isEditing, setIsEditing] = useState(false); //لتحديد ما إذا كان المستخدم في وضع التعديل.
      const [editedData, setEditedData] = useState({
        //لتخزين البيانات المعدلة مؤقتًا.
        Name: user?.Name || "",
        PhoneNumber: user?.PhoneNumber || "",
        IdNumber: user?.IdNumber || "",
      });
    const navigate = useNavigate();
      //عند تعديل أي input، نحفظ القيمة الجديدة في editedData.
      const handleInputChange = (element) => {
        const { name, value } = element.target;
        setEditedData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    const handleSave = async () => {
      const currentUser = auth.currentUser;
      try {
         if (currentUser && editedData.IdNumber !== user.IdNumber) {
          await updateEmail(currentUser, editedData.IdNumber);
        }
    
        // تحديث البيانات المحلية
        updateUserInfo({
          ...user,
          Name: editedData.Name,
          PhoneNumber: editedData.PhoneNumber,
          IdNumber: editedData.IdNumber,
        });
    
        setIsEditing(false);
      } catch (error) {
        console.error("فشل في تحديث بيانات المستخدم:", error);
        alert("حدث خطأ أثناء التحديث: " + error.message);
      }}

    let SignOutHandler = () =>{
      localStorage.removeItem("userData"); // لما اعمل تسجيل خروج احذف بيانات المستخم من ال local storage
      localStorage.removeItem("Token"); // لما اعمل تسجيل خروج احذف التوكين من ال local storage
      auth.updateloggedIn(false);
      navigate("/Login", {replace:true} );
    }
  return (
    <Fragment>
      <NavBar />
      <div
        className={`container-fluid p-5 bg-primary text-white text-center login-cover ${OrganizationProfileStyle.loginCover}`}
      ></div>
      <div className={`container py-5 ${OrganizationProfileStyle.container}`}>
        <div className={`${OrganizationProfileStyle.profileCard}`}>
            <div className={`${OrganizationProfileStyle.profileInfo}`}>
              <i className="fa-solid fa-user fa-2x"></i>
              <div className={OrganizationProfileStyle.userDetails} >
                <div className = {OrganizationProfileStyle.infoItem}
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <label htmlFor="Name">
                    <strong>Organization Name:</strong>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="Name"
                      value={editedData.Name}
                      onChange={handleInputChange}
                      className={OrganizationProfileStyle.EditInput}
                    />
                  ) : (
                    user.Name
                  )}
                </div>
                <div className= {OrganizationProfileStyle.infoItem}
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection:"row",
                    alignItems: "center",
                    gap: "17px",
                  }}
                >
                  <label htmlFor="PhoneNumber">
                    <strong>Phone Number :</strong>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="PhoneNumber"
                      value={editedData.PhoneNumber}
                      onChange={handleInputChange}
                      className={OrganizationProfileStyle.EditInput}
                    />
                  ) : (
                    user.PhoneNumber
                  )}
                  <span className="text-primary"></span>
                </div>
                <div
                  className={`${OrganizationProfileStyle.infoItem}`}
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "65px",
                    }}
                >
                  <label htmlFor="IdNumber">
                    <strong>Id Number :</strong>
                  </label>

                  {isEditing ? (
                    <input
                      type="text"
                      name="IdNumber"
                      value={editedData.IdNumber}
                      onChange={handleInputChange}
                      className={`${OrganizationProfileStyle.EditInput}`}
                    />
                  ) : (
                    user.IdNumber
                  )}
                </div>
              </div>
            </div>
            {/* <i className="fa-solid fa-user"></i> */}
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className={`btn btn-danger text-white ms-2 ${OrganizationProfileStyle.SaveBtn}`}
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className={`btn btn-danger text-white ms-2 ${OrganizationProfileStyle.CancelBtn}`}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className={`btn btn-danger text-white ms-2 ${OrganizationProfileStyle.EditBtn}`}
                >
                  Edit
                </button>
                <button
                  onClick={SignOutHandler}
                  className={`btn btn-danger text-white ms-2  ${OrganizationProfileStyle.textDanger}`}
                >
                  Log Out
                </button>
              </>
            )}
          </div>

        <div className={`aid-card ${OrganizationProfileStyle.aidCard}`}>
          <h5>Service name</h5>
          <p>
            Number of registrants: <span>Exxxxxx</span>
          </p>
          <p>
            Number of beneficiaries: <span>Exxxxxx</span>
          </p>
        </div>

        <div className={`aid-card ${OrganizationProfileStyle.aidCard}`}>
          <h5>Service name</h5>
          <p>
            Number of registrants: <span>Exxxxxx</span>
          </p>
          <p>
             Number of beneficiaries: <span>Exxxxxx</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default OrganizationProfile;
