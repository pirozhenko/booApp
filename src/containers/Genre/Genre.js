import React, { Component } from 'react';
import { connect } from 'react-redux';

import BooksList from '../../components/Pages/BooksList/BooksList';
import Sort from '../../components/Sort/Sort'
import * as actions from '../../store/actions/index';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBooks: [],
        };
    }

    componentDidMount () {
        this.props.onInitBooks();
        this.setState({
            sortBooks: this.props.books
        });
        if (this.props.activeGenre) {
            this.setGenre(this.props.activeGenre);
        }
    }

    setGenre = (attr) => {  
        const activeGenre = this.props.books.filter(sortBooks => {
            return sortBooks.genre === attr;
        });
        this.setState({sortBooks: activeGenre})
    }

    render () {
        return (
            <div>
                <Sort setGenre={this.setGenre} />
                <BooksList
                    favorites={this.props.favorites}
                    addToFavorites={this.props.onAddToFavorites}
                    books={this.state.sortBooks} 
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.booksArray,
        favorites: state.books.favorites,
        activeGenre: state.books.activeGenre,
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