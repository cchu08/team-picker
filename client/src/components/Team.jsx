import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Rating } from 'semantic-ui-react';
import { saveFavorites } from '../actions/teampickerActions';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: true
    }
    this.handleFavorites = this.handleFavorites.bind(this);
  }

  handleFavorites(event, data) {
    const { teamData, toggleFavorites, favoriteTeams } = this.props;
    toggleFavorites(teamData, favoriteTeams)
    // add to favorites list
  }


  render() {
    const { teamData, favoriteTeams } = this.props;
    const { full_name, abbr, logo, primary_color, secondary_color } = teamData;

    return (
      <div style={{ margin: '5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
        <Image src={logo} />
        <h3>{full_name}</h3>
        <Rating icon="star" size="massive" style={{ paddingTop: '5%' }} onRate={this.handleFavorites} defaultRating={favoriteTeams.map(team => team.full_name).indexOf(full_name) >= 0 ? 1 : 0}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteTeams: state.favorites.teams,
  favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavorites(team, favoriteTeams) {
    dispatch(saveFavorites(team, favoriteTeams))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Team);