import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route
              path="/products/:id"
              render={(props) => <ProductDetails {...props} />}
            />
            <Route
              path="/products"
              render={(props) => <Products {...props} />}
            />
            <Route
              path="/posts/:year?/:month?"
              render={(props) => <Posts {...props} />}
            />
            <Redirect from="/messages" to="/posts" />
            <Route path="/admin" render={(props) => <Dashboard {...props} />} />
            <Route
              path="/not-found"
              render={(props) => <NotFound {...props} />}
            />
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
