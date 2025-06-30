import axios from "axios";
import ApiResponse from "../Components/models/ApiResponse";

class AuthApiConroller {
  API_KEY = "AIzaSyAuPkN0pU-Uv4q9knGLDehdCJESmlxwC0g";

  login = async (IdNumber, Password) => {
    const email = `${IdNumber}@myApp.fake`;
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
        {
          email: email,
          password: Password,
          returnSecureToken: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log(response.data.idToken);
      let token = response.data.idToken;
      let apiResponse = new ApiResponse("Logged in Successfully",true,response.data,token);
      localStorage.setItem("Token", JSON.stringify(token));
      // console.log(apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, error.message);
    }
  };
  register = async (IdNumber, PhoneNumber, Password, ConfirmPassword) => {
    const email = `${IdNumber}@myApp.fake`;
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
        {
          email: email,
          password: Password,
          returnSecureToken: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      let apiResponse = new ApiResponse("register in Succssfully ", true);
      
      apiResponse.token = response.data.idToken;
      console.log(apiResponse.token);
      return apiResponse;
    } catch (error) {
    //   console.log(error);
    const errorMessage = error.response?.data?.error?.message || error.message;
  console.log("Firebase Error Message:", errorMessage);
  return new ApiResponse(false, errorMessage);
    //   return new ApiResponse(false, error.message);
    }
  };
}
export default AuthApiConroller;
