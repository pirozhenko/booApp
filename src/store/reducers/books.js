import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    booksArray: [],
    error: false,
    favorites: [],
    activeGenre: ''
};

const addToFavorites = ( state, action ) => {
    const favorites = state.booksArray.filter(book => {
        return book.title === action.bookName;
    });

    const delFavorites = state.favorites.some(item => {
        return item.title === action.bookName;
    });

    const delIndex = state.favorites.findIndex(item => {
        return item.title === action.bookName;
    });
    
    const updatedState = {
        favorites: !delFavorites
                    ? state.favorites.concat(favorites)
                    : (state.favorites.splice(delIndex, 1), state.favorites)
    };
    return updateObject( state, updatedState );
};

const removeFromFavorites = (state, action) => {

    const delIndex = state.favorites.findIndex(item => {
        return item.title === action.bookName;
    });
    
    const updatedState = {
        favorites: (state.favorites.splice(delIndex, 1), state.favorites),
    }

    return updateObject( state, updatedState );
};

const setGenre = (state, action) => {

    const updatedState = {
        activeGenre: action.activeGenre,
    }

    return updateObject( state, updatedState );
};

const setBooks = (state, action) => {
    return updateObject( state, {
        booksArray: action.booksArray,
        error: false
    } );
};

const fetchBooksListFailed = (state) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TO_FAVORITES: return addToFavorites( state, action );
        case actionTypes.REMOVE_FROM_FAVORITES: return removeFromFavorites(state, action);
        case actionTypes.SET_GENRE: return setGenre(state, action);
        case actionTypes.SET_BOOKS: return setBooks(state, action);    
        case actionTypes.FETCH_BOOKS_FAILED: return fetchBooksListFailed(state, action);
        default: return state;
    }
};

export default reducer;