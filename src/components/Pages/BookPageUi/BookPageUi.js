import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BookPageUi.css';


const BookPageUi = (props) => {
    const { title, author, genre } = props[0];
    const description = props.query.pages[0].categories;    

    return <div className={classes.Wrapp}>
        <h1>{title}</h1>
        <Link className={classes.Link} to={`/author${author}`}>author: {author}</Link>
        <Link className={classes.Genre} to={'/genre'} onClick={() => props.onSetGenre(genre)}>genre: {genre}</Link>
        <div className={classes.Descr}>description 🡇</div>
        <ul className={classes.DescrList}>
            {description.map((item, key) => {
                const cutedDescription = item.title.replace('Category:', '');

                return <li className={classes.DescrItem} key={key}>{cutedDescription}</li>
            })}
        </ul>
        {props.isFavorite && <div className={classes.DeleteLink}>this book in favorites list: delete? <span className={classes.DelSpan} onClick={() => props.onRemoveFromFavorites(title)}>yes</span></div>}
    </div>
};

export default BookPageUi;