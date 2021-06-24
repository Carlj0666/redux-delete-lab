import React, { Component } from 'react';
import manageBand from '../reducers/manageBand';
import deleteBand from '../reducers/manageBand'

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={deleteBand}>X</button>
      </div>
    );
  }
};

export default Band
