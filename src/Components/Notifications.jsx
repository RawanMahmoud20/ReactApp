import { Fragment, useContext } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../Components/NavBar";
import AddCategorystyle from "../resourse/cssModules/AddCategory.module.css";
import health from "../resourse/imgs/health.jpg";
import { NotificationContext } from "../Context/NotificationContext";

const Notifications = () => {
  const { notificationData } = useContext(NotificationContext);

  return (
    <Fragment>
      <NavBar />
      <main
        className={`container my-5 p-5 bg-white rounded-4 text-center shadow ${AddCategorystyle.container}`}
      >
        <h2 className={AddCategorystyle.title}>Notifications</h2>

        {notificationData.length === 0 ? (
          <p className="text-muted">No notifications available.</p>
        ) : (
          notificationData.map((notification, index) => (
            <div
              key={index}
              className="card card-custom p-3 mb-4 text-start"
            >
              <h4>
                <img
                  src={health}
                  className={AddCategorystyle.icon}
                  alt="logo"
                  style={{ width: "40px", marginRight: "10px" }}
                />
                {notification.orgName}
              </h4>
              <p>Delivery location: <span>{notification.location}</span> 
              </p>
              <p>Delivery date: <span> {notification.date}</span> 
              </p>
              <p>Comments: <span> {notification.comments}</span> 
              </p>
            </div>
          ))
        )}
      </main>
    </Fragment>
  );
};

export default Notifications;
