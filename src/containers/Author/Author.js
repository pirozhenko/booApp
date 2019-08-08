import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import AuthorPageUi from '../../components/Pages/AuthorPageUi/AuthorPageUi';

class Author extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }
    componentDidMount () {
        const author = this.props.match.params.id;
        this.props.onInitBooks();
        
        fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${author}&prop=categories&origin=*&format=json&formatversion=2`, {
              method: "GET"
            }
          )
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => {
              console.log(error.message);
        });
        
    };
    
    render () {
        return this.state.data ? (
            <AuthorPageUi bookList={this.props.books} data={this.state.data}/>
        ) : null;
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
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Author);