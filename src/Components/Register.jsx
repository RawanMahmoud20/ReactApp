import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import RegisterStyle from "../resourse/cssModules/Register.module.css";
import Logo from "../resourse/imgs/logIn.png";
import { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthApiConroller from "../Controller/AuthApiConroller";

const Register = () => {
  let auth = useContext(AuthContext);
  let navigate = useNavigate();
  let AuthController = new AuthApiConroller();
  let IdNumberRef = useRef();
  let PhoneNumberRef = useRef();
  let PasswordRef = useRef();
  let ConfirmPasswordRef = useRef();
  let NameRef = useRef();
      let userData = () =>{
      return( {
      Id : Date.now(),
      Name : NameRef.current.value,
      IdNumber : IdNumberRef.current.value,
      PhoneNumber : PhoneNumberRef.current.value,
      Password : PasswordRef.current.value,
      ConfirmPassword : ConfirmPasswordRef.current.value
    });}
    

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
      if(PasswordRef.current.value == ConfirmPasswordRef.current.value){
        return true;
      }else{
        // alert("password does'nt match Confirm Passowrd");
        Swal.fire({
          title: 'Error!',
          text: 'Passwords dont match',
          icon: 'error',
          showConfirmButton: false,
          showCancelButton:false
          });
      }
    }else{
      Swal.fire({
      title: 'Error!',
      text: 'Please fill all required fields',
      icon: 'warning',
      showConfirmButton: true,
    });
    }
    return false;
  };
let register = async () =>{
    let result = await AuthController.register(IdNumberRef.current.value ,PhoneNumberRef.current.value, PasswordRef.current.value, ConfirmPasswordRef.current.value);
    // alert(result.message);
    
    if(result.status){
      const UserData = userData();
      console.log(UserData);
      auth.updateUserInfo(UserData);
      auth.updateloggedIn(true);
      auth.UpdateToken(result.token);
      navigate("/HomePage");
    }else{
      Swal.fire({
        title: 'Registration Failed',
        text: 'Please check your data or try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });   
     }
}
  return (
    <Fragment>
      <NavBar />
      <div className={`${RegisterStyle.registerCard} cl-6`}>
        <div className={`${RegisterStyle.registerForm}`}>

          <h3>REGISTER</h3>
          <form onSubmit={RegisterHandler}>

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
