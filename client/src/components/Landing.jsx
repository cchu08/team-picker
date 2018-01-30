import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import SportsPanel from './SportsPanel';
import { fetchAllSports, setTabAndTeams, fetchFavoriteTeams } from '../actions/teampickerActions'

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getSports, getFavorites, handleTabChange } = this.props;
    getSports();
    getFavorites();
  }

  render() {
    return (
      <div>
        <Search />
        <SportsPanel />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSports() {
    dispatch(fetchAllSports());
  },
  getFavorites() {
    dispatch(fetchFavoriteTeams());
  },
  handleTabChange(event, { name }) {
    dispatch(setTabAndTeams(name));
  }
});

export default connect(state => state, mapDispatchToProps)(Landing);