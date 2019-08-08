import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import BookPageUi from '../../components/Pages/BookPageUi/BookPageUi';

class BookPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBook: [],
            data: '',
            isFavorite: false,
        };
    }

    componentDidMount () {
        this.props.onInitBooks();
        const currentBookTitle = this.props.match.params.id;
        const currentBook = this.props.books.filter(book => {
            return book.title === currentBookTitle;
        });
        const isFavoriteCurrentBook = this.props.favorites.find((el => {
            return currentBookTitle === el.title;
        }));
        fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${currentBookTitle}&prop=categories&origin=*&format=json&formatversion=2`, {
              method: "GET"
            }
          )
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => {
              console.log(error.message);
        });
        this.setState({ currentBook })

        if (isFavoriteCurrentBook) {
            this.setState({ isFavorite: true })
        }
    }
    onDeleteFromFavorites = (bookName) => {
        this.props.onRemoveFromFavorites(bookName);
        this.setState({ isFavorite: false });
    }

    onSetGenre = (genreType) => {
        this.props.onSetGenre(genreType);
    }

    render () {
        return this.state.data ? (
            <BookPageUi
                isFavorite={this.state.isFavorite}
                onRemoveFromFavorites={this.onDeleteFromFavorites}
                onSetGenre={this.onSetGenre}
                {...this.state.data}
                {...this.state.currentBook}
            />
        ) : null;
    };
}

const mapStateToProps = state => {
    return {
        books: state.books.booksArray,
        error: state.books.error,
        favorites: state.books.favorites,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetGenre: (genreType) => dispatch(actions.setGenre(genreType)),
        onRemoveFromFavorites: (bookName) => dispatch(actions.removeFromFavorites(bookName)),
        onInitBooks: () => dispatch(actions.initBooksList()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);