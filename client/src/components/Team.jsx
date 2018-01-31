import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Image, Rating } from 'semantic-ui-react';
import { saveFavorites } from '../actions/teampickerActions';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: true
    }
    this.toggleStar = this.toggleStar.bind(this);
  }

  toggleStar(event, data) {
    const { teamData } = this.props;
    console.log(event.target, data);
  }


  render() {
    const { teamData } = this.props;
    const { full_name, abbr, logo, primary_color, secondary_color } = teamData;

    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
        <Image src={logo} />
        <h3>{full_name}</h3>
        <Rating icon="star" size="huge" style={{ paddingTop: '5%' }} onRate={this.toggleStar} defaultRating={(teamData.full_name === 'Los Angeles Lakers' ? 1 : 0)}/>
      </div>
    );
  }
}

export default /*connect(mapStateToProps, mapDispatchToProps)*/(Team);