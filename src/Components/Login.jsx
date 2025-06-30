import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import Logo from "../resourse/imgs/logIn.png";
import LoginStyle from "../resourse/cssModules/Login.module.css";
import { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import AuthApiConroller from "../Controller/AuthApiConroller";
import Swal from "sweetalert2";
const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  let AuthController = new AuthApiConroller();
  let IdNumberRef = useRef();
  let PasswordRef = useRef();
let userData = () =>{
      return( {
      Id : Date.now(),
      IdNumber : IdNumberRef.current.value,
      Password : PasswordRef.current.value,
    });}
  let checkData =()=>{
if(IdNumberRef.current.value != "" && PasswordRef.current.value !=""){
  return true;
}
else{
      Swal.fire({
      title: 'Error!',
      text: 'Please fill all required fields',
      icon: 'warning',
      showConfirmButton: true,
    });
    }
    return false;
  }
  const LoginHandler = async (event) =>{
    event.preventDefault();
    if(checkData()){
    await login();
  };

  }

let login = async () =>{
    const id = IdNumberRef.current.value.trim();
    const password = PasswordRef.current.value;
    const email =`${id}@myApp.fake`;
    try {
    let result = await AuthController.login(IdNumberRef.current.value , PasswordRef.current.value);
    alert(result.message);
    if(result.status){
      const UserData = userData();
      console.log(UserData);
      console.log("LoggedIn");
      auth.updateloggedIn(true);
      auth.updateUserInfo(UserData); 
      auth.UpdateToken(result.token);
      navigate("/HomePage");
    }else{
          Swal.fire({
            title: 'login Failed',
            text: 'Please check your data or try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
          });   
         }
    } catch (error) {
      console.log("Firebase login error",error);
Swal.fire({
            title: 'login Failed',
            text: 'Please check your data or try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
          });     }
}
  return (
    <Fragment>
      <NavBar />
      <div className={`${LoginStyle.loginCard }`}>
        <div className={`${LoginStyle.loginForm }`}>
          <h3 className="text-center">LOG IN</h3>
          <form onSubmit={LoginHandler}>
            <div className={`mb-3 ${LoginStyle.inputIcon}`}>
              <i className="fa fa-user text-danger"></i>
              <input
                type="text"
                className={`${LoginStyle.formControl}`}
                placeholder="ID Number"
                pattern="\d{9}"
                maxLength="9"
                title="رقم الهوية يجب أن يتكون من 9 أرقام فقط"
                required
                ref={IdNumberRef}
              />
            </div>
            <div className={`mb-3 ${LoginStyle.inputIcon}`}>
              <i className="fa fa-lock text-danger"></i>
              <input
                type="password"
                className={`${LoginStyle.formControl}`}
                placeholder="Password"
                required
                ref={PasswordRef}
              />
            </div>
            <div className="mb-3 text-end">
              <a href="#" className={`${LoginStyle.formText}`}>
                Forgot password?
              </a>
            </div>
            <button type="submit" className={`btn ${LoginStyle.btnPrimary} mb-3`}>
              LOGIN
            </button>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberMe"
              />
              <label className={`${LoginStyle.formCheckLabel}`} htmlFor="rememberMe">
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
