//only purphose - to render a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        // console.log(this.props.asdf)  // -> 123
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {  // takes App state as an argument, on any change instantly re-renders
    // Whatever is return will show up as props inside BookList
    return {  // an object
        // asdf: '123',
        books: state.books  // connection between Redux and container populates this.props.books with state.books
    }
}

export default connect(mapStateToProps)(BookList);  // connect(function)(component) -> container