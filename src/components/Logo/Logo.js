import React from 'react';
import logoImg from '../../assets/images/logo.gif';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={logoImg} alt="MyBooksApp" />
    </div>
);

export default logo;