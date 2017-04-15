export default function() {
    return [
        { title: 'Javascript: The Good Parts', pages: 101 },
        { title: 'Harry Potter', pages: 39 },
        { title: 'The Dark Tower', pages: 85 },
        { title: 'Eloquent Ruby', pages: 1 }
    ];
}

// An Action creator is function that returns an action object including type and e.g. data,
// Action then automatically sent to all reducers
// reducers contain a switch statement to goto line depending on action.type or default - ignore current action
// if reducer does care, it can return a new value and that new value will be the new value the relevant key within state
// Once all reducers have returned state, new state will propagate to all containers and thus trigger rerendering
