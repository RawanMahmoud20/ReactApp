import { Fragment } from "react/jsx-runtime";
import NavBar from "./NavBar";
import Logo from "../resourse/imgs/Red Crescent.png";
import CitizenRegistrationStyle from "../resourse/cssModules/CitizenRegistration.module.css";
import { useContext, useRef } from "react";
import { RegisteredUsersContext } from "../Context/RegisteredUsersContext";
const CitizenRegistration = (props) => {
  let firstNameRef = useRef();
  let lastNameRef = useRef();
  let idNumberRef = useRef();
  let phoneNumberRef = useRef();
  let memberNumberRef = useRef();
  let genderRef = useRef();
  let locationRef = useRef();
const { users, setUsers } = useContext(RegisteredUsersContext);

  let SaveUserSubmitHandler = (event) => {
    event.preventDefault();
    if (CheckData()) {
      const newUser = NewUser();
      setUsers(prevUsers => {
      const updatedUser = [...prevUsers, newUser];
      console.log("Users after add:", updatedUser);
      // ✅ حفظهم في localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUser));
      return updatedUser;
    });
      }
  };
  let CheckData = () => {
    if (
      firstNameRef.current.value != "" &&
      lastNameRef.current.value != "" &&
      idNumberRef.current.value != "" &&
      phoneNumberRef.current.value != "" &&
      memberNumberRef.current.value != "" &&
      genderRef.current.value != "" &&
      locationRef.current.value != ""
    ) {
      return true ;
    }
    return false;
  };

  let NewUser = () =>{
    const todayDate = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
    return{
      id: Date.now(),
      firstName: firstNameRef.current.value,
      lastName : lastNameRef.current.value,
      idNumber : idNumberRef.current.value,
      phoneNumber : phoneNumberRef.current.value,
      memberNumber : memberNumberRef.current.value,
      gender : genderRef.current.value,
      location : locationRef.current.value ,
      status: "waiting" ,// مبدئيًا
      registrationDate: todayDate, // ✅ تاريخ التسجيل
    };
  };
  return (
    <Fragment>
      <NavBar />
      <div className={`form-container ${CitizenRegistrationStyle.formContainer}`}>
        <div className={`form-title ${CitizenRegistrationStyle.formTitel}`}>
          <img src={Logo} alt="Logo" />
          <h4>Citizen Registration</h4>
        </div>
        <form onSubmit={SaveUserSubmitHandler}>
          <div className="row g-3">
            <div className="col-md-3">
              <label forhtml="idNumber" className="form-label">
                ID number citizen
              </label>
              <input
                type="text"
                className="form-control"
                id="idNumber"
                ref={idNumberRef}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" ref={firstNameRef} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Father Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Grand Father</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" ref={lastNameRef} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Date of Birth</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Marital Status</label>
              <select className="form-select">
                <option selected disabled>
                  Choose…
                </option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Original Governorate</label>
              <select className="form-select">
                <option selected disabled>
                  gaza , north
                </option>
                <option>Damascus</option>
                <option>Aleppo</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Gender</label>
              <select className="form-select" ref={genderRef}>
                <option selected disabled >
                  Choose…
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Mobile Number</label>
              <input type="text" className="form-control" ref={phoneNumberRef} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Alternative Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Current Governorate</label>
              <select className="form-select">
                <option selected disabled>
                  {" "}
                  Select the governorate{" "}
                </option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Current City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">The Location</label>

              <select className="form-select" ref={locationRef}>
                <option selected disabled>
                  {" "}
                  Sheikh Radwan{" "}
                </option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">The Nearest Place</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">member Number </label>
              <input type="number" className="form-control" ref={memberNumberRef} />
            </div>
            <div className="col-md-3">
              <label className="form-label">Age Group 0-2 Years</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Age Group 3-5 Years</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Age Group 6-18 Years</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Age Group 19-59 Years</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">People with Chronic Diseases</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">People with Disabilities</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Breadwinner</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Housing Status</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <button
            className={`btn btn-danger submit-btn ${CitizenRegistrationStyle.submitBtn}`}
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default CitizenRegistration;
