// @flow

const initialState = {
    isOpen         : false,
    todo           : undefined,
    todo_id        : undefined,
    assigned_users : []
};

type State = Object

function assignWindowReducer(state : State = initialState, action: Object) {
    
    switch (action.type) {

        case 'CLOSE_DIALOG_AND_ASSIGN' :
            return {
                ...state,
                isOpen         : false,
                todo           : undefined,
                todo_id        : undefined,
                assigned_users : []
            };

        case 'OPEN_ASSIGN_WINDOW' :
            state.isOpen  = true;
            state.todo    = action.todo;
            state.todo_id = action.todo_id;
            state.assigned_users = [...action.assigned_users];
            return {
                ...state,
                isOpen         : state.isOpen,
                todo           : state.todo,
                todo_id        : state.todo_id,
                assigned_users : state.assigned_users
            };

        case 'SAVE_ASSIGN_WINDOW' :
            return {
                ...state,
                isOpen         : false,
                todo           : undefined,
                todo_id        : undefined,
                assigned_users : []
            };

        default: return state;
    }
}

module.exports = assignWindowReducer;