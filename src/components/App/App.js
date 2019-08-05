import React from "react";
import { HomePage, CartPage } from "../pages";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import ShopHeader from "../ShopHeader";

const App = ({ cartItems, orderTotal }) => {
  return (
    <main role="main" className="container">
      <div className="App">
        <ShopHeader numItems={cartItems.length} total={orderTotal.toFixed(2)} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </div>
    </main>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return { cartItems, orderTotal };
};

export default connect(mapStateToProps)(App);
