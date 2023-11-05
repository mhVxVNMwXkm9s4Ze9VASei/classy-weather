import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "" };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {}

  render() {
    const { location } = this.state;

    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search for location..."
            value={location}
            onChange={(event) =>
              this.setState({ location: event.target.value })
            }
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather</button>
      </div>
    );
  }
}

export default App;
