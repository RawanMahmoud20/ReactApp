import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoute.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { RegisterProvider } from "./context/RegisterContext.js";
import CardContextProvider from "./context/CardContext.js";
// import './resourse/Css/style.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CardContextProvider>
      <RegisterProvider>
        <AppRoutes />
      </RegisterProvider>
    </CardContextProvider>
  </BrowserRouter>
);
