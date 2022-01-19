// for routing and multiple pages
import React, { Component } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";

const Main = () => {
  // class Main extends Component {
  return (
    // The Switch decides which component to show based on the current URL.
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Homepage} />
    //   </Switch>
    // </Router>
    <Router>
      <Routes>
        <Route exact path="/" exact element={Homepage} />
      </Routes>
    </Router>
  );
};

export default Main;
