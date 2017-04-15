import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCSJiSWJH5q8z3qrJO_Oi_4Ys3ohpFmjJ4';

// class allows concept of state to be used, rather than function, returns static jsx
class App extends Component {
    constructor(props) { // constructor always called with props
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };  // array of objects
        
        this.videoSearch('surfboards')
        // search func into constructor to avoid totally empty list on init
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => { // callback function (with data)
            this.setState({  // causes rerendering
                videos: videos,
                selectedVideo: videos[0]
             });  // if identical strings k:v  - in ES6 can condense to single var name
            console.log(videos);
        });
    }

    render () {
        // debounced version
       const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

       return ( // App is parent of VideoList - need to pass data parent to child 'passing props - prop videos'
       // props argument will arrive as argument to a function 
            <div>
                <SearchBar onSearchTermChange={videoSearch} /> 
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
                    // passed callback between App and grandchild - limit of confusing
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));