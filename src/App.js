import React from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Orders from "./pages/Orders";
import Reviews from "./pages/Reviews";
import HomeNavbar from "./components/HomeNavbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <HomeNavbar />
      <Route path="/home" render={() => <Home />} />
      <Route path="/orders" render={() => <Orders />} />
      <Route path="/reviews" render={() => <Reviews />} />
      <Footer />
    </Router>
  );
};

export default App;
