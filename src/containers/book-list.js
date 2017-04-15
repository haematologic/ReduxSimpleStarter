//only purphose - to render a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

// makes action creators available to be called inside containers
// Anything returned from this function will end up as props on the BookList container
// i.e. this.state.selectBook will be returned to Container  - this will call our action creator
function mapDispatchToProps(dispatch) {  
    // Whenever selectBook is called, the result should be passed to all of our reducers
    // bind action creators to dispatch function
    // selectBook is totally plain function - bindActionCreators and dispatch return this func to all components
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, SelectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);  // connect(function)(component) -> container