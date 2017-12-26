import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'; // action creator

class SearchBar extends Component {
    // component state not redux state
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // replace local method with method bound to instance with correct context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // event object from all JS DOM handlers (not React thing)
    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        // this is a callback, but needs to be bound to the context
        event.preventDefault(); 
        // Search_bar container needs to call an action creator through Redux (connect)
        this.props.fetchWeather(this.state.term);  // property gained by bottom text which binds 
        // to dispatch and maps to function
        this.setState({term: ''}); // empty string will cause re-render
    }

    render() {
        return (
         // bootstrap classes
         // nb when form element focusse and user presses enter or clicks on a form element child
         // e.g. button - browser automatically makes post request. So handle onSubmit DOM event
         // why not use div? Get free functionality from form element i.e. one handler for
         // for submission whatever the method (enter / click etc)
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast for your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    // passing off event handler with callback, value of this is mystery context
                    // vs with fat arrow wrapper before. {() => this.onInputChange()}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);  // bind actions with dispatch
    // make sure flows down into Middleware
}

export default connect(null, mapDispatchToProps)(SearchBar);  // and remember to
// disable class from exporting as the default. Null as first argument - normally map
// state to props. Second argument is mapped func, first is state, which we don't care about