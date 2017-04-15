export function selectBook(book) { //Action creator
    // console.log('A book has been selected:', book.title);

    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property, (and usually, also a payload).
    return {
        type: 'BOOK_SELECTED', // type may be a variable, usually UPPERCASE. Usually pulled out to sepearate file.
        payload: book
    };
}  // need to bind this action creator to booklist component however - see book-list.js