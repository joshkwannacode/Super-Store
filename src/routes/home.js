import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";

const homeRoute = () => <Route exact path="/" component={Home} />;

export default homeRoute;