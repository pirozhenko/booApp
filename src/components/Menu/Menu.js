import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.css';

const Menu = () => <nav className={classes.Nav}>
            <NavLink activeClassName={classes.Active} to="/">home</NavLink>
            <NavLink activeClassName={classes.Active} to="/list-authors">authors</NavLink>
            <NavLink activeClassName={classes.Active} to="/favorites">favorites</NavLink>
            <NavLink activeClassName={classes.Active} to="/genre">genre</NavLink>
        </nav>

export default Menu;