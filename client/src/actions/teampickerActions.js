import nfl from '../../../mock-data/nfl';
import nhl from '../../../mock-data/nhl';
import nba from '../../../mock-data/nba';

export const FETCH_ALL_SPORTS = 'FETCH_ALL_SPORTS';
export const SET_ALL_SPORTS = 'SET_ALL_SPORTS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_TAB = 'SET_TAB';
export const SET_ACTIVE_TEAMS = 'SET_ACTIVE_TEAMS';

export const fetchAllSports = () => dispatch => {
  var allSports = [ nfl, nhl, nba ];
  // fetch all sports server call

  dispatch(setSports(allSports));
}

export const setSports = (sports) => ({
  type: SET_ALL_SPORTS,
  payload: sports
});

export const setSearchTerm = (input) => ({
  type: SET_SEARCH_TERM,
  payload: input
})

export const setTeams = (sportName) => {
  // get sport function
  var allSports = [ nba, nhl, nfl ];
  var activeSport = allSports.filter(sport => sport.meta.name === sportName).map(sport => sport.teams);
  var activeTeams = [].concat.apply([], activeSport);

  console.log(activeTeams);
  return { type: SET_ACTIVE_TEAMS, payload: activeTeams };
};

export const setTabAndTeams = (tabName) => dispatch => {
  dispatch(setTeams(tabName));
  dispatch(setTab(tabName));
};

export const setTab = (tabName) => ({
  type: SET_TAB,
  payload: tabName
});





