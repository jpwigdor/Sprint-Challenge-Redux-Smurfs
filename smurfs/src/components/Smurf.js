import React from 'react';
import { connect } from 'react-redux';

class Smurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.data.name,
      age: this.props.data.age,
      height: this.props.data.height
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(null)(Smurf);