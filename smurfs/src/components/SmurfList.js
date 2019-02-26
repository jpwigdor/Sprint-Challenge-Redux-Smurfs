import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

class SmurfList extends React.Component {
  componentDidMount(){
    fetchSmurfs();
  }
  render(){
    return (
      <section className="smurf-list">
        {this.props.smurfs.map(smurf => <Smurf key={smurf.id} data={smurf} />)}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps)(SmurfList);