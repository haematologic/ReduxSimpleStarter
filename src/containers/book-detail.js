import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        return (
            <div>Book Detail!</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook  // as defined in app.js by ActiveBook reducer
    };
}

export default connect(mapStateToProps)(BookDetail);