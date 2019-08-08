import React from 'react';
import AuthorsListEl from './AuthorsListEl';
import classes from './AuthorsList.css';

const AuthorsList = (props) => {
    return (
        <ul className={classes.List}>
            {props.bookList.map((book, key) => {
                return <li key={key} className={classes.ListItem}>
                    <AuthorsListEl bookList={props.bookList} {...book} />
                </li>
            })}
        </ul>
    )
}

export default AuthorsList;