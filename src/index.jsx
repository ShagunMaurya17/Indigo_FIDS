import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./public/service-Worker.js")
//       .then((registration) => {
//         console.log("Service Worker registered:", registration);
//       })
//       .catch((error) => {
//         console.log("Service Worker registration failed:", error);
//       });
//   });
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
