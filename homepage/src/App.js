import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

export function App() {
  return (
    <div>
      {/* <Router>
        <Switch>
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </Router> */}
      <Homepage />
      {/* <Main /> */}
    </div>
  );
}

export default App;
