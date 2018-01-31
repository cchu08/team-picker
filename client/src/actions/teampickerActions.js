import axios from 'axios';

export const FETCH_ALL_SPORTS = 'FETCH_ALL_SPORTS';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const SET_ALL_SPORTS = 'SET_ALL_SPORTS';
export const SET_FAVORITES = 'SET_FAVORITES';
export const SET_FAVORITE_TEAMS = 'SET_FAVORITE_TEAMS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_TAB = 'SET_TAB';
export const SET_ACTIVE_TEAMS = 'SET_ACTIVE_TEAMS';

export const fetchAllSports = (cb) => dispatch => {
  axios.get('/sports', {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
  })
    .then((response) => {
      const sports = response.data;
      dispatch(setSports(sports));
      cb(sports);
    })
    .catch((error) => console.error('Error fetching sports'))
};

// export const fetchFavorites = (cb) => dispatch => {
//   // fetch favorites from local storage
//   axios.get('/favorites', {
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     }
//   })
//   .then((response) => {
//     const favoritesData = response.data;
//     dispatch(setFavorites(favoritesData));
//     cb(favoritesData);
//   })
//   .catch((error) => console.error('Error fetching favorites'))
// };

export const setFavorites = (favoritesData) => ({
  type: SET_FAVORITES,
  payload: favoritesData
});

export const setFavoriteTeams = (favorites) => ({
  type: SET_FAVORITE_TEAMS,
  payload: favorites
});

export const saveFavorites = (team, favoriteTeams) => dispatch => {
  // save favorites to local storage, dispatch set favorites
  var newFavorites = favoriteTeams.map(favorite => favorite.full_name).indexOf(team.full_name) >= 0 ?
    favoriteTeams.filter(favorite => favorite.full_name !== team.full_name)
    :
    favoriteTeams.concat([ team ]);

  dispatch(setFavoriteTeams(newFavorites));
}

export const setSports = (sports) => ({
  type: SET_ALL_SPORTS,
  payload: sports
});

export const setSearchTerm = (input) => ({
  type: SET_SEARCH_TERM,
  payload: input
});

export const setTeams = (sportName, allSports) => {
  var activeSport = allSports.filter(sport => sport.meta.name === sportName).map(sport => sport.teams);
  var activeTeams = [].concat.apply([], activeSport);

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





