import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Home from "./Home";
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/item1" activeClassName="active">
            Item1
          </NavLink>
          <NavLink exact to="/item2" activeClassName="active">
            Item2
          </NavLink>
          <NavLink exact to="/item3" activeClassName="active">
            Item3
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item1" component={Item1} />
          <Route exact path="/item2" component={Item2} />
          <Route exact path="/item3" component={Item3} />
        </Switch>
      </div>
    );
  }
}

export default VendingMachine;
