/* 
    Universidad del Valle de Guatemala
    Autora: Andrea María Cordon Mayen
    Carne: 16076
    index.js
*/

import * as types from '../Types';

export const addPost = (
    id, title, message, karma
) => ({
    type: types.POST_ADDED,
    payload: {
        id, title, message, karma
    }
});

export const addComment = (
    id, message, karma
) => ({
    type: types.COMMENT_ADDED,
    payload: {
        id, message, karma
    }
});

export const addVote = (
    positive,
) => ({
    type: types.VOTE_ADDED,
    payload: {
        positive
    }
});