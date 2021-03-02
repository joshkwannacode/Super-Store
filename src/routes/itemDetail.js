import React from "react";
import { Route } from "react-router-dom";
import ItemDetail from "../pages/ItemDetail";

const itemDetail = () => <Route exact path="/itemDetail" component={ItemDetail} />;

export default itemDetail;