import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions";

const Smurf = props => {
  const handleClick = () => {
    props.deleteSmurf(props.id);
  };
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

      <button className="delete" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
