import React, { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = (props) => {
  const [registerAs, setRegisterAs] = useState("");

  return (
    <RegisterContext.Provider value={{ registerAs, setRegisterAs }}>
      {props.children}
    </RegisterContext.Provider>
  );
};
