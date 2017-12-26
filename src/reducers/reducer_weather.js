// reducers are just functions
// first is state - default to null, second argument is action
export default function(state = null, action) {
    console.log('Action received', action);
    
    return state;
}