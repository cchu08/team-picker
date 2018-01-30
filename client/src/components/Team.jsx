import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { selectFavorite } from '../actions/teampickerActions';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { full_name, abbr, logo, primary_color, secondary_color } = this.props;

    return (
      <div>
        <img src={logo} />
        <div>{full_name}</div>
      </div>
    );
  }
}

export default (Team);