import {createSlice, combineReducers, configureStore} from '@reduxjs/toolkit';
// import {configureStore} from 'react-redux';



export const Todos = createSlice({
    name: 'todos',
    initialState: {
        cards: null
    },
    reducers: {
        getCards: (state, {payload}) => {
            console.log(payload);
            state.cards = payload;
        },
        

    }
});

const Task = createSlice({
    name: 'task',
    initialState: null,
    reducer: {
        getTask: (state, {payload}) => {
            state = payload;
        }
    }
});


const reducer = combineReducers({
    todos: Todos.reducer,
    task: Task.reducer
})

export const { getCards } = Todos.actions;

export const store = configureStore({
    reducer: reducer
  })

