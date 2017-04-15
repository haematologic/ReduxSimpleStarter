import React, { Component } from 'react';

class SearchBar extends Component {  // ES6 classes based React component
    constructor(props) {  // always called when class initated
        super(props);  // super calls parent method on parent class (Component)

        this.state = { term: '' };  // state - plain JS obj, initialised by defining a property.
        // component level state (SearchBar) 
    }
    
    render() {  // render method = function
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} // 'controlled component' - new value re-rendered when state updated
                    onChange={event => this.onInputChange(event.target.value)}  //ES6 arrow func tidys up 
                />
            </div>
        )  // javascript variables in JSX enclosed in {}
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;