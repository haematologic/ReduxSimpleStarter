import axios from 'axios';

const API_KEY = '2f2951be61d051babaa5128ccb685244';
// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
// ES6 template strings – uses backticks
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';  // keeps action type in single var for
// action and reducer, rather than copy and pasting between files.


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},uk`; // static country code
    // use axios vs jquery as much lighternpm
    const request = axios.get(url);  // returns a promise, but
    // looks synchronous - thanks to redux-promise
    
    console.log('Request', request);

    return {
        type: FETCH_WEATHER,
        payload: request  // return promise as payload,
        // redux-promise looks for promise payloads specifically, and
        // stops the action entirely, intercepts them and
        // waits until promise resolves, then creates new action
        // with the same type (payload), but with 
        // resolved request and issues that to reducers
    };
}