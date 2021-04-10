import React, { Component } from "react";
import axios from "axios";
export class ApiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgUrl: "",
    };
  }
  async componentDidMount() {
    let url = `  https://api.github.com/users/${this.props.nameUser}`;
    let response = await axios.get(url);

    const data = response.data;
    console.log(data);
    this.setState({ name: data.name, imgUrl: data.avatar_url });
  }
  render() {
    return (
      <div>
        <img src={this.state.imgUrl} />
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default ApiComponent;
