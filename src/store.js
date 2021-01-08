import {createSlice, combineReducers} from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        cards: null
    },
    reducers: {
        get: (state, {payload}) => {
            state = payload;
        },

    }
});

const taskSlice = createSlice({
    name: 'task',
    initialState: {},
    reducer: {
        get: (state, {payload}) => {
            state = payload;
        },
        add: (state, {payload}) => {
            state = payload;
        }
    }
})

const reducer = combineReducers({
    todos: todos.reducer,
    task: task.reducer
})

export default store = configureStore({
    reducer: reducer
  })
