import React, { Component } from "react";
import { getSmurf } from "../actions";
import { connect } from "react-redux";

import Smurf from "./Smurf";

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurf();
  }
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                delete={this.props.deleteSmurfFromServer}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToPops = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToPops,
  { getSmurf }
)(Smurfs);
