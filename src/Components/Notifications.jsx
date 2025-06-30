import { Fragment } from "react/jsx-runtime";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import AddCategorystyle from "../resourse/cssModules/AddCategory.module.css";
import health from "../resourse/imgs/health.jpg";
const Notifications = () => {
  return (
    <Fragment>
      <NavBar />
      <main className={`container my-5 p-6 bg-white rounded-4 text-center shadow ${AddCategorystyle.container}`} style={{ padding: "30px"}}>
        <h2 className={`${AddCategorystyle.title}`}>Notifications</h2>

        <div className={`card card-custom p-3 mb-3 text-start`}>
          <h3>
            <img src={health} className={`${AddCategorystyle.icon}`} alt="logo" />
            Health
          </h3>
          <p>
            Delivery location : <span>Exxxxxx</span>
          </p>
          <p>
            Delivery date : <span>Exxxxxx</span>
          </p>
          <p>
            comments : <span>Exxxxxx</span>
          </p>
        </div>
      </main>
    </Fragment>
  );
};
export default Notifications;
