import { Fragment } from "react/jsx-runtime";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Flag from "../resourse/imgs/Flag.png";
import UserProfileStyle from "../resourse/cssModules/UserProfile.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../fireBase/firebase";
import { updateEmail, updateProfile } from "firebase/auth";

const UserProfile = () => {
  let auth = useContext(AuthContext);
  let { user, updateUserInfo } = useContext(AuthContext);
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


  let SignOutHandler = () => {
    localStorage.removeItem("userData"); // لما اعمل تسجيل خروج احذف بيانات المستخم من ال local storage
    auth.updateloggedIn(false);
    navigate("/Login", { replace: true });
  };
  if (user != null) {
    return (
      <Fragment>
        <NavBar />
        <div
          className={`container-fluid p-5 bg-primary text-white text-center login-cover ${UserProfileStyle.loginCover}`}
        ></div>
        <div className={`container py-5 ${UserProfileStyle.container}`}>
          <div className={`${UserProfileStyle.profileCard}`}>
            <div className={`${UserProfileStyle.profileInfo}`}>
              <i className="fa-solid fa-user fa-2x"></i>
              <div className={UserProfileStyle.userDetails} >
                <div className = {UserProfileStyle.infoItem}
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginRight: "65px",
                  }}
                >
                  <label htmlFor="Name">
                    <strong>User Name:</strong>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="Name"
                      value={editedData.Name}
                      onChange={handleInputChange}
                      className={UserProfileStyle.EditInput}
                    />
                  ) : (
                    user.Name
                  )}
                </div>
                <div className= {UserProfileStyle.infoItem}
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection:"row",
                    alignItems: "center",
                    gap: "10px",
                    marginRight: "16px",
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
                      className={UserProfileStyle.EditInput}
                    />
                  ) : (
                    user.PhoneNumber
                  )}
                  <span className="text-primary"></span>
                </div>
                <div
                  className={`${UserProfileStyle.infoItem}`}
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
                      className={`${UserProfileStyle.EditInput}`}
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
                  className={`btn btn-danger text-white ms-2 ${UserProfileStyle.SaveBtn}`}
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className={`btn btn-danger text-white ms-2 ${UserProfileStyle.CancelBtn}`}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className={`btn btn-danger text-white ms-2 ${UserProfileStyle.EditBtn}`}
                >
                  Edit
                </button>
                <button
                  onClick={SignOutHandler}
                  className={`btn btn-danger text-white ms-2  ${UserProfileStyle.textDanger}`}
                >
                  Log Out
                </button>
              </>
            )}
          </div>
          <div className={`aid-card ${UserProfileStyle.aidCard}`}>
            <h5>Registered aid information</h5>
            <p>
              Organization name: <span>Exxxxxx</span>
            </p>
            <p>
              Category: <span>Exxxxxx</span>
            </p>
            <p>
              Registration date: <span>Exxxxxx</span>
            </p>
            <p>
              Registration status: <span>Exxxxxx</span>
            </p>
          </div>

          <div className={`aid-card ${UserProfileStyle.aidCard}`}>
            <h5>Registered aid information</h5>
            <p>
              Organization name: <span>Exxxxxx</span>
            </p>
            <p>
              Category: <span>Exxxxxx</span>
            </p>
            <p>
              Registration date: <span>Exxxxxx</span>
            </p>
            <p>
              Registration status: <span>Exxxxxx</span>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
};
export default UserProfile;
