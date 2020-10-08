import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import FeaturedPage from "./components/pages/FeaturedPage";
import Homepage from "./components/pages/Homepage";
import ProductsPage from "./components/pages/ProductsPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="middle"></div> */}
        <Switch>
          <Route exact path="/akva-dejon-plus" component={FeaturedPage} />
          <Navbar />
        </Switch>
        <Route exact path="/akva-dejon-plus/home" component={Homepage} />
        <Route
          exact
          path="/akva-dejon-plus/products"
          component={ProductsPage}
        />
        <Route exact path="/akva-dejon-plus/about" component={AboutPage} />
        <Route exact path="/akva-dejon-plus/contact" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
