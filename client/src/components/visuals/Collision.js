import * as d3 from 'd3';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { generateCollision } from './collisionConfig';

class Collision extends Component {
  componentDidMount() {
    this.collision = d3.select(ReactDOM.findDOMNode(this.refs.collision));

    generateCollision(this.collision);
  }

  render() {
    return <div ref="collision" />;
  }
}

export default Collision;
