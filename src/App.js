import { BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/home";
import Cart from "./routes/cart";

import Deals from "./routes/deals";
import Nav from "./components/nav";

import Context from "./context/Context";
import ItemDetail from "./routes/itemDetail";

function App() {
  return (
    <Context>
      <Router>
        <Nav />
        <Home />
        <Cart />
        <Deals />
        <ItemDetail />
      </Router>
    </Context>
  );
}

export default App;
