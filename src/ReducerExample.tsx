import React, { useReducer } from 'react';

interface Todo {
    text: string;
    complete: boolean;
}

type State = Todo[];

type Actions = 
    | { type: "add"; text: string }
    | { type: "remove"; idx: number };

const TodoReducer = (state: State, action: Actions) => {
    switch(action.type) {
        case "add":
            return [...state, { text: action.text, complete: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default: 
            return state;
    }
};

const ReducerExample = () => {
    const [ todos, dispatch ] = useReducer(TodoReducer, []);

    return (
        <div>
            {JSON. stringify(todos)}
            <button
                onClick={() => dispatch({ type: "add", text: "..." })}
            >
                +
            </button>
        </div>
    )
};

export default ReducerExample;
