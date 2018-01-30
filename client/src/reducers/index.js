import { combineReducers } from 'redux';

import {
  SET_ALL_SPORTS,
  SET_SEARCH_TERM,
  SET_TAB,
  SET_ACTIVE_TEAMS
} from '../actions/teampickerActions';

const sportsData = (state = { allSports: [], activeTab: 'nba',activeTeams: [] }, action) => {
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
  searchTerm
});

export default rootReducer;