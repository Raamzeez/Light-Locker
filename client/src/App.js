import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import HomeNavbar from "./components/HomeNavbar";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <HomeNavbar />
      <Route exact path={["/home", "/"]} render={() => <Home />} />
      <Route exact path="/pricing" render={() => <Pricing />} />
      <Route exact path="/reviews" render={() => <Reviews />} />
      <Route exact path="/cart" render={() => <Cart />} />
      <Route exact path="/about" render={() => <AboutUs />} />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
