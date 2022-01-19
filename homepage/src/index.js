import React from "react";
import ReactDOM from "react-dom";
// import { render } from "react-dom";
// for multiple pages browsing
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    {/* here you can display various pages from the 'Main' component */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>,
//     rootElement
// );

// ReactDom.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
// )
