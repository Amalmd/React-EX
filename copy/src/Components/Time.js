import React from "react";
import { Component } from "react";
import "./style.css";

class Time extends Component {
  state = {
    seconds: "",
    minutes: "",
    hours: "",
  };

  timeHandler({ target }) {
    const time = {};
    switch (target.id) {
      case "seconds":
        time.seconds = target.value;
        time.minutes = target.value / 60;
        time.hours = target.value / 60 / 60;
        break;
      case "minutes":
        time.seconds = target.value * 60;
        time.minutes = target.value;
        time.hours = target.value / 60;
        break;
      case "hours":
        time.seconds = target.value * 60 * 60;
        time.minutes = target.value * 60;
        time.hours = target.value;
        break;
      default:
        break;
    }
    this.setState(time);
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>Seconds:</p>
          <input
            id="seconds"
            type="text"
            onChange={this.timeHandler.bind(this)}
            value={this.state.seconds}
          ></input>
        </div>
        <div>
          <p>Minutes:</p>
          <input
            id="minutes"
            type="text"
            onChange={this.timeHandler.bind(this)}
            value={this.state.minutes}
          ></input>
        </div>
        <div>
          <p>Hours:</p>
          <input
            id="hours"
            type="text"
            onChange={this.timeHandler.bind(this)}
            value={this.state.hours}
          ></input>
        </div>
      </div>
    );
  }
}

export default Time;
