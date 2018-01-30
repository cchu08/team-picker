import nfl from '../../../mock-data/nfl';
import nhl from '../../../mock-data/nhl';
import nba from '../../../mock-data/nba';

export const FETCH_ALL_SPORTS = 'FETCH_ALL_SPORTS';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const SET_ALL_SPORTS = 'SET_ALL_SPORTS';
export const SET_FAVORITES = 'SET_FAVORITES';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_TAB = 'SET_TAB';
export const SET_ACTIVE_TEAMS = 'SET_ACTIVE_TEAMS';

export const fetchAllSports = () => dispatch => {
  var allSports = [ nfl, nhl, nba ];
  // fetch all sports server call

  dispatch(setSports(allSports));
}

export const fetchFavoriteTeams = () => dispatch => {
  // fetch favorites from local storage
  var favorites = [];

  dispatch(setFavoriteTeams(favorites));
};

export const setFavoriteTeams = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites
});

export const saveFavorites = favorites => dispatch => {
  // save favorites to local storage, dispatch set favorites

  dispatch(setFavoriteTeams(favorites));
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
  // get favorites function
  var favorites = { meta: { id: 6, name: "favorites"}, teams: [
      {
            "id": 186,
            "full_name": "Los Angeles Lakers",
            "display_name": "Lakers",
            "abbr": "LAL",
            "logo": "https://static.sprtactn.co/teamlogos/nba/100/lal.png",
            "primary_color": "FDB927",
            "secondary_color": "552582"
      },
      {
          "id": 251,
          "full_name": "Los Angeles Rams",
          "display_name": "Rams",
          "abbr": "LA",
          "logo": "https://static.sprtactn.co/teamlogos/nfl/100/la.png",
          "primary_color": "002244",
          "secondary_color": "B3995D"
      },
    ]};
  var allSports = [ nba, nhl, nfl, favorites ];
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





