import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import AuthorsList from '../../components/Pages/Authors/AuthorsList'



class Authors extends Component {
    
    componentDidMount () {
        this.props.onInitBooks();
    };
    
    render () {
        return (
            <AuthorsList
                bookList={this.props.books}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        books: state.books.booksArray,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onInitBooks: () => dispatch(actions.initBooksList()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Authors);