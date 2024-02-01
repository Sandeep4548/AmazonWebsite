import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./componets/header/Navbar";
import Newnav from "./componets/header/newnavbaar/Newnav";
import Maincomp from "./componets/home/Maincomp";
import Footer from "./componets/footer/Footer";
import Signup from "./componets/sighup_in/Signup";
import Cart from "./componets/cart/Cart";
import Buynow from "./componets/buynow/Buynow";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Signin from "./componets/sighup_in/Signin";
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Router>
              <Navbar />
              <Newnav />
              <Switch>
                <Route exact path="/">
                  <Maincomp />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/login">
                  <Signin />
                </Route>
                <Route exact path="/getproductione/:id">
                  <Cart />
                </Route>
                <Route exact path="/buynow">
                  <Buynow />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2>Loading....</h2>
          </div>
        )
      }
    </>
  );
}

export default App;
