import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCSJiSWJH5q8z3qrJO_Oi_4Ys3ohpFmjJ4';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

// Downward data flow says highest parent component should fetch data
// Create a new component. This component should produce some HTML
const App = () => {  // const = ES2016, similar to var, but it's constant, functional React Component
    return ( 
    <div>
        <SearchBar />
    </div>
    );
    // ?HTML inside JS => NO! It's JSX - dialect of JS, that looks like HTML will be transpiled
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));