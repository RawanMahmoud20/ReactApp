import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoute.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext, AuthContextProvider } from "./Context/AuthContext.jsx";
import { RegisteredUsersProvider } from "./Context/RegisteredUsersContext.jsx";
import CardContextProvider from "./Context/CardContext.jsx";
// import './resourse/Css/style.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <RegisteredUsersProvider>
        <CardContextProvider>
        <AppRoutes />
        </CardContextProvider>
      </RegisteredUsersProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
