/* 
    Universidad del Valle de Guatemala
    Autora: Andrea María Cordon Mayen
    Carne: 16076
    comment.js
*/

import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
    switch (action.type) {
      case types.COMMENT_ADDED: {
        const { id } = action.payload;
        const message = state[id];
        const karma = karma[id];
  
        if (typeof karma !== 'undefined') {
          return {
            ...state,
            [id]: id + 1,
          };
        }
  
        return {
          ...state,
          [id]: 1,
        };
      }
      default: return state;
    }
  };
  
  const order = (state = [], action) => {
    switch (action.type) {
      case types.COMMENT: {
        const { id } = action.payload;
  
        if (!state.includes(id)) {
          return [...state, id];
        }
  
        return state;
      }
      default: return state;
    }
  };
  
  const comment = combineReducers({
    byId,
    order,
  });
  
  export default comment;