import React from 'react';
import ListTitle from '../../Title/Title';
import classNames from 'classnames';
import classes from './BooksList.css';

const booksListItem = (props) => {
    return (
        <li className={classes.ListItem}> 
            <ListTitle author={props.author}/>
            {props.title}
            <i
                className={
                    classNames(classes.Icon, {[classes.Fav]: props.itemFavorite})
                    }
                onClick={() => props.addToFavorites(props.title)}
            />
        </li>
    );
};

export default booksListItem;