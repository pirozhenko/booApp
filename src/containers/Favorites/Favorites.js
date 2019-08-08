import React, { Component } from 'react';
import { connect } from 'react-redux';

import BooksList from '../../components/Pages/BooksList/BooksList';
import * as actions from '../../store/actions/index';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favoritesBooks: [],
        };
    }

    componentDidMount () {
        this.props.onInitBooks();
        this.setState({
            favoritesBooks: this.props.favorites
        });
    }

    render () {
        return (
            <div>
                <BooksList
                    favorites={this.props.favorites}
                    addToFavorites={this.props.onAddToFavorites}
                    books={this.state.favoritesBooks}
                />
            </div>
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
        onRemoveFromFavorites: (bookName) => dispatch(actions.removeFromFavorites(bookName)),
        onInitBooks: () => dispatch(actions.initBooksList()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);