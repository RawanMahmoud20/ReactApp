import { Fragment } from "react/jsx-runtime";
import UserReportsStyle from "../resourse/cssModules/RegisteredUserReports.module.css";
import NavBar from "./NavBar";
import { useContext, useEffect, useState } from "react";
import { RegisteredUsersContext } from "../Context/RegisteredUsersContext";
import { NotificationContext } from "../Context/NotificationContext";
import OrgNavBar from "./OrgNavBar";
import Swal from "sweetalert2";

const RegisteredUserReports = (props) => {
  const { users, setUsers } = useContext(RegisteredUsersContext);
  const [statusFilter, setStatusFilter] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

  // جلب notificationData كمصفوفة إشعارات و setNotificationData لتحديثها
  const { notificationData, setNotificationData } = useContext(NotificationContext);
  const {unreadNotifications, setUnreadNotifications} = useContext(NotificationContext);

  // حالة منفصلة لبيانات النموذج الجديدة (الإشعار)
  const [newNotificationData, setNewNotificationData] = useState({
    orgName: "",
    location: "",
    date: "",
    comments: "",
  });
  // useEffect(() => {
  //   console.log("Users in context:", users);
  //   if (statusFilter !== "All") {
      
  //     const filtered = users.filter(
  //       (element) =>
  //         element.status.toLowerCase() === statusFilter.toLowerCase()
  //     );
  //     setFilteredUsers(filtered);
  //   } else {
  //     setFilteredUsers(users);
  //   }
  // }, [statusFilter, users]);
useEffect(() => {
  console.log("Users in context:", users);

  let tempUsers = [...users];

  // فلترة حسب الحالة
  if (statusFilter !== "All") {
    tempUsers = tempUsers.filter(
      (element) =>
        element.status.toLowerCase() === statusFilter.toLowerCase()
    );
  }

  // فلترة حسب الاسم
  if (searchTerm.trim() !== "") {
    const term = searchTerm.toLowerCase().trim();

    tempUsers = tempUsers.filter((element) => {
      const first = element.firstName.toLowerCase();
      const last = element.lastName.toLowerCase();
      const fullNormal = `${first} ${last}`;
      const fullReversed = `${last} ${first}`;

      return (
        first.includes(term) ||
        last.includes(term) ||
        fullNormal.includes(term) ||
        fullReversed.includes(term)
      );
    });
  }

  setFilteredUsers(tempUsers);
}, [statusFilter, searchTerm, users]);


  
  const OnStatusFilterChangeHandler = (userId, newStatus) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers); // تحديث المستخدمين في السياق
  };
// تحديث بيانات النموذج الجديدة للإشعار (newNotificationData)
  const handleNotificationChange = (e) => {
    const { name, value } = e.target;
    setNewNotificationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendNotification = () => {
    const newNotification = {
      orgName: newNotificationData.orgName,
      location: newNotificationData.location,
      date: newNotificationData.date,
      comments: newNotificationData.comments,
    };
     console.log("Notification Sent With Data:", newNotification);

    // تحديث notificationData كمصفوفة بإضافة الإشعار الجديد
setNotificationData((prev) => {
  const updated = [newNotification,...(Array.isArray(prev) ?  prev : [])];
        // ✅ إظهار رسالة SweetAlert
  Swal.fire({
    icon: "success",
    title: "Notification Sent!",
    text: "The notification has been sent successfully.",
    confirmButtonColor: "#d33"
  });
  setUnreadNotifications((count) => count + 1);
  return updated;
});
 // تغيير حالة المستخدمين المعروضين (في حالة done) إلى waiting
  const updatedUsers = users.map((user) => {
    if (filteredUsers.some((u) => u.id === user.id) && user.status.toLowerCase() === "done") {
      return { ...user, status: "waiting" };
    }
    return user;
  });
  setUsers(updatedUsers);

    setShowModal(false);

    // إعادة تهيئة بيانات النموذج بعد الإرسال
    setNewNotificationData({
      orgName: "",
      location: "",
      date: "",
      comments: "",
    });
  };

  return (
    <Fragment>
      <OrgNavBar />
      <main className={`container-sm my-5 p-4 bg-white rounded-4 shadow mt-5 ${UserReportsStyle.container}`}>
        <div className={UserReportsStyle.title}>Registered User Reports</div>

        {/* الفلاتر */}
        <div className="d-flex justify-content-start align-items-center my-4 flex-wrap gap-3">
          <label htmlFor="statusFilter" className={`${UserReportsStyle.filter} fw-semibold`}>
            Filter by Service Status:
          </label>
          <select
            id="statusFilter"
            className="form-select w-auto"
            onChange={(e) => setStatusFilter(e.target.value)}
            value={statusFilter}
          >
            <option value="All">All Status</option>
            <option value="done">Done</option>
            <option value="waiting">Waiting</option>
            <option value="in progress">In Progress</option>
          </select>

          <label htmlFor="searchInput" className={`${UserReportsStyle.filter} fw-semibold`}>
            Search by User Name:
          </label>
          <input
            id="searchInput"
            type="text"
            className="form-control w-auto"
            placeholder="Enter name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* جدول المستخدمين */}
        <div className="table-responsive">
          <table className={`${UserReportsStyle.registedUserTable} table table-bordered`}>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Id Number</th>
                <th>Phone Number</th>
                <th>Member Number</th>
                <th>Gender</th>
                <th>Location</th>
                <th>Service Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.idNumber}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.memberNumber}</td>
                  <td>{user.gender}</td>
                  <td>{user.location}</td>
                  <td>
                    <select
                      value={user.status}
                      onChange={(e) => OnStatusFilterChangeHandler(user.id, e.target.value)}
                    >
                      <option value="done">Done</option>
                      <option value="waiting">Waiting</option>
                      <option value="in progress">In Progress</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* زر الإشعار */}
        {statusFilter === "done" && filteredUsers.length > 0 && (
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-danger" onClick={() => setShowModal(true)}>
              Send Notification
            </button>
          </div>
        )}
      </main>

      {/* النافذة المنبثقة */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">Send Notification</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Org Name</label>
                  <input
                    type="text"
                    name="orgName"
                    className="form-control"
                    value={newNotificationData.orgName}
                    onChange={handleNotificationChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Delivery Location</label>
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    value={newNotificationData.location}
                    onChange={handleNotificationChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Delivery Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={newNotificationData.date}
                    onChange={handleNotificationChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Comments</label>
                  <textarea
                    name="comments"
                    className="form-control"
                    rows="3"
                    value={newNotificationData.comments}
                    onChange={handleNotificationChange}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button className="btn btn-danger btn-primary" onClick={handleSendNotification}>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RegisteredUserReports;
