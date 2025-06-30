import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  loggedIn: false,
  updateloggedIn: (status) => {},
  user: null,
  updateUserInfo: (data) => {},
  token: null,
  UpdateToken: (token) => {},
});

export const AuthContextProvider = (props) => {
  // نبدأ حالة loggedIn بالقيمة من localStorage مباشرة أو false
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });

  const [user, setUserInfo] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("Token") || null;
  });

  const updateloggedIn = (status) => {
    setLoggedIn(status);
    localStorage.setItem("loggedIn", status ? "true" : "false");
  };

  const updateUserInfo = (data) => {
    setUserInfo(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const UpdateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("Token", newToken);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        updateloggedIn,
        user,
        updateUserInfo,
        token,
        UpdateToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
