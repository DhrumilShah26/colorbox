import "./App.css"
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "100",
      width: "50",
      backgroundColor: "#000000"
    };

    this.styles = {
      height: "100px",
      width: "50px",
      backgroundColor: "#000000"
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.styles = {
      ...this.styles,
      ...this.state
    };

    this.styles.width = this.state.width + "px";
    this.styles.height = this.state.height + "px";

    this.forceUpdate(() => {
      console.log("Forcing Update the App.")
    });
  };

  render() {
    return (
      <div className="App container">
        <form onSubmit={this.handleSubmit}>
          <label>Height: </label>
          <input
            type="number"
            value={this.state.height}
            name="height"
            onChange={this.handleChange}
            min="1"
          />
          <label>Width: </label>
          <input
            type="number"
            value={this.state.width}
            name="width"
            onChange={this.handleChange}
            min="1"
          />
          <label>Color: </label>
          <input
            type="color"
            value={this.state.backgroundColor}
            name="backgroundColor"
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        <div style={this.styles} /> 
      </div>
    );
  }
}

export default App;
