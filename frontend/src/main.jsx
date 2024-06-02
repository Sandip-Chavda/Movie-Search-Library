import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { MovieProvider } from "./context/MovieContext.jsx"; // Import MovieProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
