import React, { Component } from "react";
import Cards from "./components/cards/cards";
import Chart from "./components/chart/chart";
import CountryPicker from "./components/countryPicker/countryPicker";
import http from "./services/httpService";
import styles from "./App.module.css";

class App extends Component {
  state = {
    country: "",
    data: {},
  };

  handleCountryChange = async (country) => {
    const data = country
      ? await http.getCountryData(country)
      : await http.getData();
    this.setState({ data, country });
  };

  async componentDidMount() {
    const data = await http.getData();
    this.setState({ data });
  }
  render() {
    return (
      <div className={styles.container}>
        <img src="/image.png" alt="Corona Vairous" className={styles.img} />
        <Cards data={this.state.data} />
        <CountryPicker onCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
