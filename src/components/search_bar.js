import React, { Component } from 'react';

class SearchBar extends Component {  // ES6 classes based React component
    constructor(props) {  // always called when class initated
        super(props);  // super calls parent method on parent class (Component)

        this.state = { term: '' };  // state - plain JS obj, initialised by defining a property. 
    }
    
    render() {  // render method = function
        return (
            <div>
                <input
                    value={this.state.term} // 'controlled component' - new value re-rendered when state updated
                    onChange={event => this.setState({ term: event.target.value })}  //ES6 arrow func tidys up
                />  
            </div>
        )  // javascript variables in JSX enclosed in {}
    }
}

export default SearchBar;