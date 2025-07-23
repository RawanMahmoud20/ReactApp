import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import RegisterStyle from "../resourse/cssModules/Register.module.css";
import Logo from "../resourse/imgs/logIn.png";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthApiConroller from "../Controller/AuthApiConroller";
import { RegisteredUsersContext } from "../Context/RegisteredUsersContext";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");

  let auth = useContext(AuthContext);
  let navigate = useNavigate();
  let AuthController = new AuthApiConroller();
  let IdNumberRef = useRef();
  let PhoneNumberRef = useRef();
  let PasswordRef = useRef();
  let ConfirmPasswordRef = useRef();
  let NameRef = useRef();
  let userData = () => {
    return {
      Id: Date.now(),
      Name: NameRef.current.value,
      IdNumber: IdNumberRef.current.value,
      PhoneNumber: PhoneNumberRef.current.value,
      Password: PasswordRef.current.value,
      ConfirmPassword: ConfirmPasswordRef.current.value,
    };
  };

  let RegisterHandler = async (event) => {
    event.preventDefault();
    if (checkData()) {
      await register();
    }
  };
  let checkData = () => {
    if (
      IdNumberRef.current.value != "" &&
      PhoneNumberRef.current.value != "" &&
      PasswordRef.current.value != "" &&
      ConfirmPasswordRef.current.value != ""
    ) {
      if (PasswordRef.current.value == ConfirmPasswordRef.current.value) {
        return true;
        // alert("password does'nt match Confirm Passowrd");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Passwords dont match",
          icon: "error",
          showConfirmButton: false,
          showCancelButton: false,
        });
      }
    }
  };
  let register = async () => {
    let result = await AuthController.register(
      IdNumberRef.current.value,
      PhoneNumberRef.current.value,
      PasswordRef.current.value,
      ConfirmPasswordRef.current.value
    );
  
    if (result.status) {
      const UserData = userData();
      console.log("Before handleSubmit, selectedRole:", selectedRole);
      auth.updateUserInfo(UserData);
      auth.updateloggedIn(true);
      auth.UpdateToken(result.token);
  
      // نستخدم selectedRole مباشرة لأنها مضمونة وحديثة
      switch (selectedRole) {
        case "Organization":
          navigate("/OrganizationPage");
          break;
        case "Individual":
          navigate("/UserPage");
          break;
        default:
          Swal.fire({
            title: "Error!",
            text: "Please select Register As option",
            icon: "error",
          });
      }
  
      console.log("Final role going to:", selectedRole);
    } else {
      Swal.fire({
        title: "Registration Failed",
        text: "Please check your data or try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  
  // let register = async () => {
  //   let result = await AuthController.register(
  //     IdNumberRef.current.value,
  //     PhoneNumberRef.current.value,
  //     PasswordRef.current.value,
  //     ConfirmPasswordRef.current.value
  //   );
  //   // alert(result.message);

  //   if (result.status) {
  //     const UserData = userData();
  //     console.log("Before handleSubmit, auth.registerAs:", auth.registerAs);
  //     console.log(UserData);
  //     auth.updateUserInfo(UserData);
  //     auth.updateloggedIn(true);
  //     auth.UpdateToken(result.token);
  //     handleSubmit();
  //     console.log("Final role going to:", auth.registerAs);
  //   } else {
  //     Swal.fire({
  //       title: "Registration Failed",
  //       text: "Please check your data or try again later.",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   }
  // };

  const handleSelect = (value) => {
    const cleanValue = value.trim();
    console.log("Selected register as:", cleanValue);
    setSelectedRole(cleanValue); // نحدث القيمة المحلية
    auth.updateRegisterAs(cleanValue); // نحدث القيمة في context إذا كنتِ تحتاجيها لاحقًا
  };

  const handleSubmit = () => {
    const role = auth.registerAs.trim();
    console.log("Current registerAs:", role);

    switch (role) {
      case "Organization":
        navigate("/OrganizationPage");
        break;
      case "Individual":
        navigate("/UserPage");
        break;
      default:
        Swal.fire({
          title: "Error!",
          text: "Please select Register As option",
          icon: "error",
        });
    }
  };
  return (
    <Fragment>
      <NavBar />
      <div className={`${RegisterStyle.registerCard} cl-6`}>
        <div className={`${RegisterStyle.registerForm}`}>
          <h3>REGISTER</h3>
          <form onSubmit={RegisterHandler}>
            <div className="btn-group mb-3 w-100">
              <button
                type="button"
                className={`dropdown-toggle ${RegisterStyle.formControl}`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  backgroundColor: "white",
                  color: "gray",
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "220px",
                }}
              >
                <i
                  className={`fa-solid fa-user-plus ${RegisterStyle.iconInsideInput}`}
                ></i>
                {auth.registerAs || "Register As"}
              </button>

              <ul className="dropdown-menu w-100">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelect("Organization");
                    }}
                  >
                    Organization
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelect("Individual");
                    }}
                  >
                    Individual
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i className={`fas fa-user ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="text"
                className={`${RegisterStyle.formControl}`}
                placeholder="User Name"
                required
                ref={NameRef}
              />
            </div>
            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i className={`fas fa-user ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="text"
                className={`${RegisterStyle.formControl}`}
                placeholder="ID Number"
                pattern="\d{9}"
                maxLength="9"
                title="رقم الهوية يجب أن يتكون من 9 أرقام فقط"
                required
                ref={IdNumberRef}
              />
            </div>

            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i
                className={`fa-solid fa-phone ${RegisterStyle.iconInsideInput}`}
              ></i>
              <input
                type="tel"
                className={`${RegisterStyle.formControl}`}
                placeholder="Phone Number"
                required
                pattern="\d{10}"
                maxLength="10"
                title="رقم الجوال يجب أن يتكون من 10 أرقام فقط"
                ref={PhoneNumberRef}
              />
            </div>
            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i className={`fas fa-lock ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="password"
                className={`${RegisterStyle.formControl}`}
                placeholder="Password"
                required
                ref={PasswordRef}
              />
            </div>
            <div className={`${RegisterStyle.formGroup} mb-4`}>
              <i className={`fas fa-lock ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="password"
                className={`${RegisterStyle.formControl}`}
                placeholder="Confirm Password"
                required
                ref={ConfirmPasswordRef}
              />
            </div>
            <button
              type="submit"
              className={`btn ${RegisterStyle.btnRegister} mb-3`}
            >
              CREATE AN ACCOUNT
            </button>
            <div className={`${RegisterStyle.socialLogin}`}>
              <p>or register with</p>
              <div className={`${RegisterStyle.socialIcons}`}>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className={`${RegisterStyle.loginText}`}>
              <p>
                Already have an account? <a href="/Login">Login</a>
              </p>
            </div>
          </form>
        </div>
        <div className={`${RegisterStyle.registerImage}`}>
          <img src={Logo} alt="Register Image" />
        </div>
      </div>
    </Fragment>
  );
};
export default Register;
