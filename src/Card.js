import React, { Component } from "react";
import "./card.css";

export class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 40;
    let xPos = Math.random() * 40 - 20;
    let ypos = Math.random() * 40 - 20;

    this._trans = `translate(${xPos}px,${ypos}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <div style={{ transform: this._trans }} className="card">
        <img src={this.props.image} alt={this.props.name} />
      </div>
    );
  }
}

export default Card;
