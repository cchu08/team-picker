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
    const { getSports, handleTabChange } = this.props;
    getSports();
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
  handleTabChange(event, { name }) {
    dispatch(setTabAndTeams(name));
  }
});

export default connect(state => state, mapDispatchToProps)(Landing);