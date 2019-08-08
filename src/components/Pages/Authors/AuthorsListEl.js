import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import classes from './AuthorsList.css'

const AuthorsListEl = props => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={classes.AuthorEl}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {props.author}
            <CSSTransition
                in={hover}
                className={classes.DropDown}
                timeout={200}
                mountOnEnter={true}
                unmountOnExit={true}
            >
            <div>
                <Link className={classes.Link} to={`/author${props.author}`}>
                    on author page→
                </Link>
                <ul>
                    {props.bookList.filter(book => {
                        return book.author === props.author;
                    }).map((book, key) => {
                        return <li className={classes.DropDownItem} key={key}>
                            <Link className={classes.DropDownLink} to={`/book${book.title}`}>{book.title}</Link>
                        </li>
                    })}
                </ul>
            </div>
            </CSSTransition>
        </div>
    );
}

export default AuthorsListEl;