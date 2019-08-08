import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Title.css';


const listTitle = props => {
    return (
        <Link className={classes.Title} to={`/author${props.author}`}>{props.author}</Link>
    )
};

export default listTitle;