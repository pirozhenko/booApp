import React, { Component } from 'react';
import { connect } from 'react-redux';

import BooksList from '../../components/Pages/BooksList/BooksList';
import * as actions from '../../store/actions/index';

class Books extends Component {

    componentDidMount () {
        this.props.onInitBooks();
    }

    render () {
        return (
            <BooksList
                favorites={this.props.favorites}
                addToFavorites={this.props.onAddToFavorites}
                books={this.props.books}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.booksArray,
        favorites: state.books.favorites,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToFavorites: (bookName) => dispatch(actions.addToFavorites(bookName)),
        onInitBooks: () => dispatch(actions.initBooksList()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);