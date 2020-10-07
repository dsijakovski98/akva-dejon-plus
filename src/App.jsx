import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Homepage from "./components/Homepage";
import FeaturedPage from "./components/FeaturedPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="middle"></div> */}
        <Switch>
          <Route exact path="/akva-dejon-plus" component={FeaturedPage} />
          <Navbar />
          <Route exact path="/akva-dejon-plus/home" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
