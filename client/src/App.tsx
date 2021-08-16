import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeNavbar from "./components/HomeNavbar";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";

function App() {
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
}

export default App;
