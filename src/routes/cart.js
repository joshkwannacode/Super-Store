import React from "react";
import { Route } from "react-router-dom";
import Cart from "../pages/Cart";

const cart = () => <Route exact path="/cart" component={Cart} />;

export default cart;