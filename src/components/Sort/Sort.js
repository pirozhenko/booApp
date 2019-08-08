import React from 'react';
import classes from './Sort.css';

const sortArray = [
    'fiction',
    'crime', 
    'comedy', 
    'fantastic',
    'classic',
    'tragic',
    'dramma',
    'detective',
    'legend',
    'mystery'
];

const Sort = (props) => {
    return <ul className={classes.Sort}>
        sort By genres:
        {sortArray.map((item, key) => {
            return <li className={classes.SortItem} key={key} onClick={() => props.setGenre(item)}>{item}</li>
        })}
    </ul>
};

export default Sort;