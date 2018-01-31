import { combineReducers } from 'redux';

import {
  SET_ALL_SPORTS,
  SET_SEARCH_TERM,
  SET_TAB,
  SET_ACTIVE_TEAMS,
  SET_FAVORITE_TEAMS,
  SELECT_FAVORITES
} from '../actions/teampickerActions';

import nfl from '../../../mock-data/nfl';
import nhl from '../../../mock-data/nhl';
import nba from '../../../mock-data/nba';
import favorites from '../../../mock-data/favorites';


const sportsData = (state = { allSports: [nba, nfl, nhl], activeTab: 'nba', activeTeams: [] }, action) => {
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

const favoritesData = (state = favorites, action) => {
  switch (action.type) {
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
  favoritesData
});

export default rootReducer;