import React, { createContext, useState } from "react";

export const RegisteredUsersContext = createContext({
  users: [],
  setUsers: () => {},
});
export const RegisteredUsersProvider = (props) => {
  let [users, setUsers] = React.useState(() => {
    const savedUsers = localStorage.getItem("registeredUsers");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  React.useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  }, [users]);
  return (
    <RegisteredUsersContext.Provider value={{ users: users, setUsers: setUsers }}>
      {props.children}
    </RegisteredUsersContext.Provider>
  );
};