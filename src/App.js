import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import HomeNavbar from "./components/HomeNavbar";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <HomeNavbar />
      <Route exact path={["/home", "/"]} render={() => <Home />} />
      <Route exact path="/pricing" render={() => <Pricing />} />
      <Route exact path="/reviews" render={() => <Reviews />} />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
