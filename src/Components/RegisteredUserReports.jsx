import { Fragment } from "react/jsx-runtime";
import UserReportsStyle from "../resourse/cssModules/RegisteredUserReports.module.css";
import NavBar from "./NavBar";
import { useContext, useEffect, useState } from "react";
import { RegisteredUsersContext } from "../Context/RegisteredUsersContext";

const RegisteredUserReports = (props) => {
  const { users, setUsers } = useContext(RegisteredUsersContext);
  const [statusFilter, setStatusFilter] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <Fragment>
      <NavBar />
      <main
        className={`container-sm my-5 p-4 bg-white rounded-4 shadow mt-5 ${UserReportsStyle.container}`}
      >
        <div className={UserReportsStyle.title}>Registered User Reports</div>
        <div className="d-flex justify-content-start align-items-center my-4">
          <label
            htmlFor="statusFilter"
            className={`${UserReportsStyle.filter} me-3 fw-semibold`}
          >
            Filter by Service Status :
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
          {/* حقل البحث عن اسم المستخدم */}
          
<div className="d-flex align-items-center">
    <label
      htmlFor="searchInput"
      className={`${UserReportsStyle.filter} me-2 ms-4 fw-semibold`}
    >
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
        </div>
        <div className="table-responsive">
          <table
            className={`${UserReportsStyle.registedUserTable} table table-bordered`}
          >
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
                      onChange={(e) =>
                        OnStatusFilterChangeHandler(user.id, e.target.value)
                      }
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
      </main>
    </Fragment>
  );
};

export default RegisteredUserReports;
