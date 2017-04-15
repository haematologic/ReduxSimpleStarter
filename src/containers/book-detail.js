import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        // any this.state set here is only related to the component, but has nothing to do with app state defined by redux
        if (!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook  // as defined in app.js by ActiveBook reducer
    };
}

export default connect(mapStateToProps)(BookDetail);