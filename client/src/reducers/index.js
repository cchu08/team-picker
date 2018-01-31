import { combineReducers } from 'redux';

import {
  SET_ALL_SPORTS,
  SET_SEARCH_TERM,
  SET_TAB,
  SET_ACTIVE_TEAMS,
  SET_FAVORITES,
  SET_FAVORITE_TEAMS
} from '../actions/teampickerActions';

// import nfl from '../../../mock-data/nfl';
// import nhl from '../../../mock-data/nhl';
// import nba from '../../../mock-data/nba';
// import favoritesList from '../../../mock-data/favorites';


const sportsData = (state = { allSports: [], activeTab: 'favorites', activeTeams: [] }, action) => {
  switch (action.type) {
    case SET_ALL_SPORTS:
      return { ...state, allSports: action.payload };
    case SET_TAB:
      return { ...state, activeTab: action.payload };
    case SET_ACTIVE_TEAMS:
      return { ...state, activeTeams: action.payload };
    default:
      return state;
  }
};

const favorites = (state = { meta: { name: 'favorites', id: 6 }, teams: [] }, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return action.payload;
    case SET_FAVORITE_TEAMS:
      return { ...state, teams: action.payload };
    default:
      return state;
  }
}

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sportsData,
  searchTerm,
  favorites
});

export default rootReducer;