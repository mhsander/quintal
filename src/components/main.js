import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing";
import About from "./about";
import Contact from "./contact";
import Products from "./products";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/sobre" component={About} />
    <Route path="/contato" component={Contact} />
    <Route path="/produtos" component={Products} />
  </Switch>
);

export default Main;
