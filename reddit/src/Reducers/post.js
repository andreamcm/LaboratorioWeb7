/* 
    Universidad del Valle de Guatemala
    Autora: Andrea María Cordon Mayen
    Carne: 16076
    post.js
*/

import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
    switch (action.type) {
      case types.POST_ADDED: {
        const { id } = action.payload;
        const message = state[id];
  
        if (typeof message !== 'undefined') {
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
      case types.POST_ADDED: {
        const { id } = action.payload;
  
        if (!state.includes(id)) {
          return [...state, id];
        }
  
        return state;
      }
      default: return state;
    }
  };
  
  const post = combineReducers({
    byId,
    order,
  });
  
  export default post;