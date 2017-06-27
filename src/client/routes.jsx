import React from "react";
import {Route, hashHistory, Router} from "react-router";
import Home from "./components/home";

export const routes = (
  <Router history = {hashHistory}>
	 <Route path="/home" component={Home}/>
	</Router>
);
