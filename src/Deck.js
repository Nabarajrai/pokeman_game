import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

let API_BASE_URL = "https://deckofcardsapi.com/api/deck";
// import Card from "./Card";

export class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: "",
      down: [],
    };
    this.generateCard = this.generateCard.bind(this);
  }
  async componentDidMount() {
    let response = await axios.get(`${API_BASE_URL}/new/shuffle`);
    const data = response.data;
    this.setState({ deck: data.deck_id });
  }

  async generateCard() {
    let id = this.state.deck;
    console.log(id);
    try {
      let carUrl = `${API_BASE_URL}/${id}/draw/`;
      let cardResponse = await axios.get(carUrl);
      // if(cardResponse.data.remaining===0){
      //   throw new Error("No card remaining");
      // }
      console.log(cardResponse);
      let data = cardResponse.data.cards[0];
      this.setState((st) => ({
        down: [
          ...st.down,
          {
            id: data.code,
            imgUrl: data.image,
            namesdata: `${data.value} of ${data.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    let cards = this.state.down.map((c) => (
      <Card name={c.name} image={c.imgUrl} key={c.id} />
    ));
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Random Card generator</h3>
        <button
          style={{ marginBottom: "90px", padding: "1em" }}
          onClick={this.generateCard}
        >
          Generate
        </button>
        {cards}
      </div>
    );
  }
}

export default Deck;
