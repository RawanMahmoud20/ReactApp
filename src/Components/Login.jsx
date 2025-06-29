import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import Logo from "../resourse/imgs/logIn.png";
import LoginStyle from "../resourse/cssModules/Login.module.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <Fragment>
      <NavBar />
      <div className={`${LoginStyle.loginCard }`}>
        <div className={`${LoginStyle.loginForm }`}>
          <h3 className="text-center">LOG IN</h3>
          <form>
            <div className={`mb-3 ${LoginStyle.inputIcon}`}>
              <i className="fa fa-user text-danger"></i>
              <input
                type="text"
                className={`${LoginStyle.formControl}`}
                placeholder="ID Number"
                pattern="\d{9}"
                maxlength="9"
                title="رقم الهوية يجب أن يتكون من 9 أرقام فقط"
                required
              />
            </div>
            <div className={`mb-3 ${LoginStyle.inputIcon}`}>
              <i className="fa fa-lock text-danger"></i>
              <input
                type="password"
                className={`${LoginStyle.formControl}`}
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3 text-end">
              <a href="#" className={`${LoginStyle.formText}`}>
                Forgot password?
              </a>
            </div>
            <button type="submit" className={`btn ${LoginStyle.btnPrimary} mb-3`}>
            <NavLink to={""}>
            LOGIN
            </NavLink>
              <a href="./OrganizationPage">
            
              </a>
            </button>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberMe"
              />
              <label className={`${LoginStyle.formCheckLabel}`} for="rememberMe">
                Keep me signed in
              </label>
            </div>
            <div className={`${LoginStyle.socialLogin}`}>
              <p>or login with</p>
              <div className={`${LoginStyle.socialIcons}`}>
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
            <div className={`${LoginStyle.signupText}`}>
              <p>
                Don't have account? <a href="/Register">Sign up</a>
              </p>
            </div>
          </form>
        </div>
        <div className={`${LoginStyle.loginImage}`}>
          <img src={Logo} alt="Login Image" />
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
