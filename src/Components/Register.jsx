import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import RegisterStyle from "../resourse/cssModules/Register.module.css";
import Logo from "../resourse/imgs/logIn.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegisterContext } from "../context/RegisterContext";
const Register = () => {
  const navigate = useNavigate();
  const { registerAs, setRegisterAs } = useContext(RegisterContext);
  const handleSelect = (value) => {
    setRegisterAs(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerAs === "Organization") {
      navigate("/OrganizationPage");
    } else if (registerAs === "Individual") {
      navigate("/UserPage");
    } else {
      alert("Please select Register As option");
    }
  };
  return (
    <Fragment>
      <NavBar />
      <div className={`${RegisterStyle.registerCard}`}>
        <div className={`${RegisterStyle.registerForm}`}>
          <h3>REGISTER</h3>

          <form onSubmit={handleSubmit}>
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
                Register As
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
                placeholder="ID Number"
                pattern="\d{9}"
                maxLength="9"
                title="رقم الهوية يجب أن يتكون من 9 أرقام فقط"
                required
              />
            </div>

            {/* باقي الفورم كما هو */}
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
              />
            </div>

            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i className={`fas fa-lock ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="password"
                className={`${RegisterStyle.formControl}`}
                placeholder="Password"
                required
              />
            </div>

            <div className={`${RegisterStyle.formGroup} mb-4`}>
              <i className={`fas fa-lock ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="password"
                className={`${RegisterStyle.formControl}`}
                placeholder="Confirm Password"
                required
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

          {/* <form>
            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i className={`fas fa-user ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="text"
                className={`${RegisterStyle.formControl}`}
                placeholder="ID Number"
                pattern="\d{9}"
                maxlength="9"
                title="رقم الهوية يجب أن يتكون من 9 أرقام فقط"
                required
              />
            </div>
            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i className={`fa-solid fa-phone ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="tel"
                className={`${RegisterStyle.formControl}`}
                placeholder="Phone Number"
                required
                pattern="\d{10}"
                maxlength="10"
                title="رقم الجوال يجب أن يتكون من 10 أرقام فقط"
              />
            </div>
            <div className={`${RegisterStyle.formGroup} mb-3`}>
              <i className={`fas fa-lock ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="password"
                className={`${RegisterStyle.formControl}`}
                placeholder="Password"
                required
              />
            </div>
            <div className={`${RegisterStyle.formGroup} mb-4`}>
              <i className={`fas fa-lock ${RegisterStyle.iconInsideInput}`}></i>
              <input
                type="password"
                className={`${RegisterStyle.formControl}`}
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" className={`btn ${RegisterStyle.btnRegister} mb-3`}>
              <a href="/OrganizationPage"> CREATE AN ACCOUNT</a>
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
          </form> */}
        </div>
        <div className={`${RegisterStyle.registerImage}`}>
          <img src={Logo} alt="Register Image" />
        </div>
      </div>
    </Fragment>
  );
};
export default Register;
