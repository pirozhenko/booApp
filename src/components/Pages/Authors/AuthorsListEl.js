import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthorsList.css';

class AuthorsListEl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
        };
    }
    setHover = (hover) => {
        this.setState({hover});
    }
    render () {
        return (
            <div
                className={classes.AuthorEl}
                onMouseEnter={() => this.setHover(true)}
                onMouseLeave={() => this.setHover(false)}
            >
                {this.props.author}
                <div className={classes.DropDown}>
                    <Link className={classes.Link} to={`/author${this.props.author}`}>
                        on author page→
                    </Link>
                    <ul>
                        {this.props.bookList.filter(book => {
                            return book.author === this.props.author;
                        }).map((book, key) => {
                            return <li className={classes.DropDownItem} key={key}>
                                <Link className={classes.DropDownLink} to={`/book${book.title}`}>{book.title}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AuthorsListEl;