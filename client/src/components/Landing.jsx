import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import SportsPanel from './SportsPanel';
import { fetchAllSports, setTabAndTeams } from '../actions/teampickerActions'

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getSports, favorites, handleTabChange, activeTab } = this.props;

    const callSports = () => {
      return new Promise((resolve, reject) => {
        getSports(resolve);
      });
    };

    async function combineSportsAndFavorites() {
      const sports = await callSports();
      return sports.concat([ favorites ]);
    }

    combineSportsAndFavorites().then((completeList) => {
      console.log(completeList)
      handleTabChange({ name: activeTab }, completeList);
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center' }}>
        <Search />
        <SportsPanel />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeTab: state.sportsData.activeTab,
  favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({
  getSports(cb) {
    dispatch(fetchAllSports(cb));
  },
  getFavorites(cb) {
    dispatch(fetchFavorites(cb));
  },
  handleTabChange({ name }, list) {
    dispatch(setTabAndTeams(name, list));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);