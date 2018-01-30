import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import Sport from './Sport';
import { fetchAllSports, setTabAndTeams } from '../actions/teampickerActions';

class SportsPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { handleTabChange, activeTab } = this.props;
    handleTabChange(null, { name: activeTab });
  }

  render() {
    const { sports, searchTerm, activeTab, handleTabChange } = this.props;

    return (
      <div>
        <Menu tabular attached="top">
          {sports.map(sport => (
            <Menu.Item active={activeTab === sport.meta.name} name={sport.meta.name.toUpperCase()} onClick={handleTabChange} key={sport.meta.id} />
          ))}
        </Menu>
        <Sport attached="bottom" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sports: state.sportsData.allSports,
  searchTerm: state.searchTerm,
  activeTab: state.sportsData.activeTab
});

const mapDispatchToProps = dispatch => ({
  handleTabChange(event, { name }) {
    dispatch(setTabAndTeams(name.toLowerCase()));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsPanel);