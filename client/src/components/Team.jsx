import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Image, Icon } from 'semantic-ui-react';
import { saveFavorites } from '../actions/teampickerActions';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { full_name, abbr, logo, primary_color, secondary_color } = this.props;

    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
        <Image src={logo} />
        <h3>{full_name}</h3>
        <Icon name="empty star" size="big" style={{ paddingTop: '5%' }}/>
      </div>
    );
  }
}

export default /*connect(mapStateToProps, mapDispatchToProps)*/(Team);