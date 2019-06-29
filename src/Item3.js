import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Item3 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <h1>Item3</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Item3;