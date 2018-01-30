import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import Team from './Team';
import { setTeams } from '../actions/teampickerActions';

class Sport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { teams, searchTerm, name } = this.props;

    return (
      <div>
        {teams
          .filter((team) => {
            if (searchTerm.length) {
              return team.full_name.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0;
            } else {
              return !searchTerm.length;
            }
          })
          .map(team => <Team key={team.id} {...team} />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm : state.searchTerm,
  activeTab: state.sportsData.activeTab,
  teams: state.sportsData.activeTeams
});

export default connect(mapStateToProps)(Sport);