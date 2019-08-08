import * as actionTypes from './actionTypes';
import data from '../../data/authors.json';

export const addToFavorites = ( name ) => {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        bookName: name
    };
};

export const removeFromFavorites = ( name ) => {
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        bookName: name
    };
};

export const setGenre = ( name ) => {
    return {
        type: actionTypes.SET_GENRE,
        activeGenre: name
    };
};

export const setBooks = ( array ) => {
    return {
        type: actionTypes.SET_BOOKS,
        booksArray: array
    };
};

export const fetchBooksFailed = () => {
    return {
        type: actionTypes.FETCH_BOOKS_FAILED
    };
};



export const initBooksList = () => {
    return dispatch => {
       dispatch(setBooks(data))
    }
};