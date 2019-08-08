import React from 'react';
import BooksListItem from './BookListItem';

import classes from './BooksList.css';

const booksList = ( props ) => {
    console.log(props.favorites);
    return (
        <ul className={classes.BooksList}>
            {props.books.map((item, key) => {
                const itemFavorite = props.favorites.some(fav => {
                    return fav.title === item.title
                })
                return <BooksListItem
                    key={key} {...item}
                    itemFavorite={itemFavorite}
                    addToFavorites={props.addToFavorites}
                />
            })}
        </ul>
    );
};

export default booksList;