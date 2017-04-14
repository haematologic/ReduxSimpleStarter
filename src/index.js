import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCSJiSWJH5q8z3qrJO_Oi_4Ys3ohpFmjJ4';

class App extends Component {
    constructor(props) { // constructor always called with props
        super(props);

        this.state = { videos: [] };  // array of objects

        // search func into constructor to avoid totally empty list on init
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => { // callback function (with data)
            this.setState({ videos });  // if identical strings k:v  - in ES6 can condense to single var name
            console.log(videos);
        });
    }
    render () {
       return ( // App is parent of VideoList - need to pass data parent to child 'passing props - prop videos'
       // props argument will arrive as argument to a function 
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));