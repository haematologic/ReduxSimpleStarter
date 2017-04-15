// State argument is not application state, only the state this reducer is responsible for.
// e.g. reducer_books - BooksReducers is responsible only for books: BooksReducer - i.e. the state it previously produced.
// e.g. state += 1, on each action trigger, same state keeps flowing into this reducer and would increment
// reducer will get called all the time when any action fires, need a base case to ignore most

export default function(state = null, action) {  // reducers are always called with two arguments
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;  // Don't do: state.title = book.title. Always want to return a fresh object.
    }

    return state  // but initial will be undefined, not allowed, so needs default of null (ES6 syntax)
}