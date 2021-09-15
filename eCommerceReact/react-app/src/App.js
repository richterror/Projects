import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./views/Products";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
