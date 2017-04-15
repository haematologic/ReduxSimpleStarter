//only purphose - to render a list of books
import React, { Component } from 'react';

export default class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {  // need to plug-in application state to here
            // to combine React views and Redux state - connecting the two libraries is done with a separate library
            // called React-Redux. To do this make one Component to being a Container (a React component which has a
            // direct connection to the state managed by Redux). React-Redux is the bridge.
            // Containers are 'smart' Components and can inject state into 'dumb' Components.
            // Only tghe most parent component using a particular piece of state needs to be connected to Redux.
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}