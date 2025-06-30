import { Fragment } from "react/jsx-runtime";
import Aboutstyle from "../resourse/cssModules/About.module.css";
import Global from "../resourse/cssModules/Globals.module.css";
import Logo from "../resourse/imgs/Mask Group 1.png";

const About = () => {
  return (
    <Fragment>
      <header className={`text-center ${Aboutstyle.textCenter}`} id="About">
        <div className={`container ${Aboutstyle.container}`}>
          <div className="row align-items-center">
            <div
              className={`col-md-4 text-md-start ${Aboutstyle.heroText}`}
            >
              <h2>
                Have you need <br />
                <span className="text-danger">help ?</span>
              </h2>
              <p>
                "HelpHive" blends aid and organization, symbolizing <br />
                a smart platform that ensures fair and efficient <br />
                humanitarian distribution.
              </p>
              <a className={`btn btn-danger text-white ms-2 ${Aboutstyle.loginBtn}`} href="/Login">
                Log In
              </a>
              <a className={`btn btn-outline-danger ${Aboutstyle.RegisterBtn}`} href="/Register">
                Sign Up
              </a>
            </div>

            <div
              className={`col-md-8 d-none d-md-block ${Aboutstyle.imageContainer}`}
            >
              <img
                src={Logo}
                className={`img-fluid ${Aboutstyle.imgFluidCover}`}
                alt="Globe and Hands"
              />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default About;
