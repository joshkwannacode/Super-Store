import { BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/home";
import Cart from "./routes/cart";

import Deals from "./routes/deals";
import Nav from "./components/nav/Nav";

import Context from "./context/Context";

function App() {
  return (
    <Context>
      <Router>
        <Nav />
        <Home />
        <Cart />
        <Deals />
      </Router>
    </Context>
  );
}

export default App;
