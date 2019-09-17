const combineReducers     = require('redux').combineReducers;
const todoReducer         = require('./todo-reducer.jsx');
const userReducer         = require('./user-reducer.jsx');
const assignWindowReducer = require('./assign-window-reducer.jsx');
const dialogReducer       = require('./dialog-reducer.jsx');

const reducers = combineReducers ({
    todoReducer: todoReducer,
    userReducer: userReducer,
    assignWindowReducer : assignWindowReducer,
    dialogReducer : dialogReducer
});

module.exports = reducers;