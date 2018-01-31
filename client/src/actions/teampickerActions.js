export const FETCH_ALL_SPORTS = 'FETCH_ALL_SPORTS';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const SET_ALL_SPORTS = 'SET_ALL_SPORTS';
export const SET_FAVORITE_TEAMS = 'SET_FAVORITE_TEAMS';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_TAB = 'SET_TAB';
export const SET_ACTIVE_TEAMS = 'SET_ACTIVE_TEAMS';

export const fetchAllSports = () => dispatch => {
  dispatch(setSports());
}

export const fetchFavoriteTeams = () => dispatch => {
  // fetch favorites from local storage
  dispatch(setFavoriteTeams());
};

export const setFavoriteTeams = (favorites) => ({
  type: SET_FAVORITE_TEAMS,
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

export const setTeams = (sportName, allSports) => {
  // get sport function
  // get favorites function
  console.log(`what are allSports: ${allSports}`)
  var activeSport = allSports.filter(sport => sport.meta.name === sportName).map(sport => sport.teams);
  var activeTeams = [].concat.apply([], activeSport);

  console.log(activeTeams);
  return { type: SET_ACTIVE_TEAMS, payload: activeTeams };
};

export const setTabAndTeams = (tabName, sports) => dispatch => {
  dispatch(setTeams(tabName, sports));
  dispatch(setTab(tabName));
};

export const setTab = (tabName) => ({
  type: SET_TAB,
  payload: tabName
});





