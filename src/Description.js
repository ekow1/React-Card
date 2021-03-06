import React, { Component } from "react";

export class Description extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="description">
        <p>{this.props.descript}</p>
        <p>{this.props.desc}</p>
        <p>{this.props.age}</p>
        <p>{this.props.height}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

export default Description;
