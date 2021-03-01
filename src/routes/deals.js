import React from "react";
import { Route } from "react-router-dom";

import Deals from "../components/deals/Deals";

const deals = () => <Route exact path="/deals" component={Deals} />;

export default deals;