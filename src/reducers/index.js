import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({  // tells Redux how to create application state
  books: BooksReducer  // key: reducer
});

export default rootReducer;
