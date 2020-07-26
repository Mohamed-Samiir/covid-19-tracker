import React, { Component } from "react";
import Cards from "./cards/cards";
import Chart from "./charts/chart";
import CountryBox from "./countryBox/countryBox";
import { Container } from "@material-ui/core";

class App extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="sm">
        <h1>Hello from App</h1>
        <Cards />
        <CountryBox />
        <Chart />
      </Container>
    );
  }
}

export default App;
