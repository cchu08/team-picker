import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import TabContent from './TabContent';
import { fetchAllSports, setTabAndTeams } from '../actions/teampickerActions';

class SportsPanel extends Component {
  constructor(props) {
    super(props);

    this.switchTabs = this.switchTabs.bind(this);
  }



  componentDidMount() {
    const { handleTabChange, activeTab } = this.props;

    this.switchTabs(null, { name: activeTab })
  }

  switchTabs(event, { name }) {
    const { handleTabChange, sports, favorites } = this.props;

    const completeListOfTeams = sports.concat([ favorites ])
    console.log(`whole list of teams: ${completeListOfTeams}`);

    handleTabChange({ name: name }, completeListOfTeams)

  }

  render() {
    const { sports, searchTerm, activeTab } = this.props;

    return (
      <div>
        <Menu tabular attached="top">
          {sports.map(sport => (
            <Menu.Item active={activeTab === sport.meta.name} name={sport.meta.name.toUpperCase()} onClick={this.switchTabs} key={sport.meta.id} />
          ))}
          <Menu.Item active={activeTab === "favorites"} name="Favorites" onClick={this.switchTabs} />
        </Menu>
        <TabContent attached="bottom" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sports: state.sportsData.allSports,
  favorites: state.favorites,
  searchTerm: state.searchTerm,
  activeTab: state.sportsData.activeTab
});

const mapDispatchToProps = dispatch => ({
  handleTabChange({ name }, sports) {
    dispatch(setTabAndTeams(name.toLowerCase(), sports));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsPanel);