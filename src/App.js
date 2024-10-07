import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
// import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" render={(props) => <ProductDetails {...props} />}/>
            <Route path="/products" render={(props) => <Products {...props} />} />
            <Route path="/posts/:year/:month" render={(props) => <Posts {...props} />} />
            <Route path="/admin" render={(props) => <Dashboard {...props} />} />
            <Route path="/" render={(props) => <Home {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
