import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthorPageUi.css';


const AuthorPageUi = (props) => {
    const data = props.data.query.pages[0];
    return <div className={classes.Wrap}>
        <h1>{data.title}</h1>
        <ul>
            {data.categories.map((categori, key) => {
                const cutedCategori = categori.title.replace('Category:', '')
                return <li className={classes.ListItem} key={key}>
                    {cutedCategori}
                </li>
            })}
        </ul>
        Author books:
        {props.bookList.filter(book => {
            return book.author === data.title;
        }).map((item, key) => {
            return <Link className={classes.BookList} key={key} to={`/book${item.title}`}>{item.title}</Link>
        })}
    </div>
};

export default AuthorPageUi;