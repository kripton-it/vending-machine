import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <ul>
        <li><Link to="/item1">Item1</Link></li>
        <li><Link to="/item2">Item2</Link></li>
        <li><Link to="/item3">Item3</Link></li>
      </ul>
    );
  }
}

export default Home;