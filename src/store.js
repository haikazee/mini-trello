import {createSlice, combineReducers, configureStore} from '@reduxjs/toolkit';
// import {configureStore} from 'react-redux';



export const Todos = createSlice({
    name: 'todos',
    initialState: {
        cards: null,
        users: null,
        task: null
    },
    reducers: {
        getCards: (state, {payload}) => {
            // console.log(payload);
            state.cards = payload;
        },
        getTask: (state, {payload}) => {
            state.task = payload;
        },
        getAllUsers: (state, {payload}) => {
            state.users = payload;
        }
        

    }
});




const reducer = combineReducers({
    todos: Todos.reducer

})

export const { getCards, getTask, getAllUsers } = Todos.actions;

export const store = configureStore({
    reducer: reducer
  })

