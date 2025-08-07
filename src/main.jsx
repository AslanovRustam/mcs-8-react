import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import ThemeProvider from "./components/ThemeProvider";
import "modern-normalize";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
