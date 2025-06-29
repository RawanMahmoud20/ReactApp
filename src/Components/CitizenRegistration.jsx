import { Fragment } from "react/jsx-runtime";
import NavBar from "./NavBar";
import Logo from "../resourse/imgs/Red Crescent.png";
import CitizenRegistrationStyle from "../resourse/cssModules/CitizenRegistration.module.css";
const CitizenRegistration = () => {
  return (
    <Fragment>
      <NavBar />
      <div class={`form-container ${CitizenRegistrationStyle.formContainer}`}>
        <div class={`form-title ${CitizenRegistrationStyle.formTitel}`}>
          <img src={Logo} alt="Logo" />
          <h4>Citizen Registration</h4>
        </div>
        <form>
          <div class="row g-3">
            <div class="col-md-3">
              <label for="idNumber" class="form-label">
                ID number citizen
              </label>
              <input type="text" class="form-control" id="idNumber" />
            </div>
            <div class="col-md-3">
              <label class="form-label">First Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Father Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Grand Father</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Last Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Date of Birth</label>
              <input type="date" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Marital Status</label>
              <select class="form-select">
                <option selected disabled>
                  Choose…
                </option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Original Governorate</label>
              <select class="form-select">
                <option selected disabled>
                  gaza , north
                </option>
                <option>Damascus</option>
                <option>Aleppo</option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Gender</label>
              <select class="form-select">
                <option selected disabled>
                  Choose…
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Mobile Number</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Alternative Number</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Current Governorate</label>
              <select class="form-select">
                <option selected disabled>
                  {" "}
                  Select the governorate{" "}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Current City</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">The Neighborhood</label>

              <select class="form-select">
                <option selected disabled>
                  {" "}
                  Sheikh Radwan{" "}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">The Nearest Place</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Number of Female </label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Age Group 0-2 Years</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Age Group 3-5 Years</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Age Group 6-18 Years</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Age Group 19-59 Years</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">People with Chronic Diseases</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">People with Disabilities</label>
              <input type="number" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Breadwinner</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-md-3">
              <label class="form-label">Housing Status</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <button
            class={`btn btn-danger submit-btn ${CitizenRegistrationStyle.submitBtn}`}
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default CitizenRegistration;
