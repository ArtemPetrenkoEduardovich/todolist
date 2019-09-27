const initialState = {
    todoList : [
        {
            todo           : 'To do something',
            assigned_users : [1, 3, 4, 5],
            id             : 0,
        },
        {
            todo           : 'What exactly?',
            assigned_users : [],
            id             : 1
        },
        {
            todo           : 'Something!',
            assigned_users : [1, 2],
            id             : 2
        }
    ],
    last_id : 2,
    title   : 'To do list'
};


function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ASSIGN_WINDOW' :

            state.todoList.map(elem =>
                elem.id === action.todo_id ?
                    elem.assigned_users = [...action.assigned_users] : null
            );

            return {
                ...state
            };

        case 'ADD_NEW_USER_AND_ASSIGN':
            state.todoList.map(
                el => action.todo_id === el.id ? el.assigned_users.push(action.last_id) : null
            )
            return {
                ...state
            };

        case 'ADD_TODO':
            const next_id = state.last_id + 1;
            return {
                ...state,
                todoList : [
                    ...state.todoList, {
                        todo  : action.todo,
                        assigned_users : [],
                        id    : next_id
                }],
                last_id : next_id,
            };

        case 'DELETE_TODO':
            return {
                ...state,
                todoList : state.todoList.filter((item) => item.id !== action.todo_id)
            };

        default:
            return state;
    }
}

module.exports = todoReducer;













        // case 'ASSIGN_USER':
        //     state.todoList.map(
        //       elem => elem.id === action.todo_id ? elem.assigned_users.push(Number(action.user_id)) : null
        //     );
        //     return {
        //         ...state
        //     };
        //
        // case 'UNASSIGN_USER':
        //     return {
        //         ...state,
        //         todoList : state.todoList.map((item) => {
        //             if (item.id === action.todo_id) {
        //                 return {
        //                     ...item,
        //                     assigned_users : item.assigned_users.filter((user_id) => user_id !== action.user_id)
        //                 }
        //             }
        //             return item;
        //         })
        //     };