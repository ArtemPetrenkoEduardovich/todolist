const initialState = {
    userList : [
        {
            name : 'Assign',
            id   : 0
        },
        {
            name : 'Акакий',
            id   : 1
        },
        {
            name : 'Алехан',
            id   : 2
        },
        {
            name : 'Зюзя',
            id   : 3
        },
        {
            name : 'Даздраперма',
            id   : 4
        },
        {
            name : 'Пёс',
            id   : 5
        },
    ],
    last_id : 5
};


function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ASSIGN_WINDOW' :
            return {
                ...state,
                last_id : action.last_id,
                userList : [...action.userList]
            };

        case 'ADD_NEW_USER':
            var next_id = state.last_id + 1;
            return {
                ...state,
                userList : [...state.userList, {
                    name : action.name,
                    id   : next_id
                }],
                last_id : next_id
            };

        case 'ADD_NEW_USER_AND_ASSIGN':
            return {
                ...state,
                userList : [...state.userList, {
                    name : action.name,
                    id : action.last_id
                }],
                last_id : action.last_id
            };

        default:
            return state;
    }
}

module.exports = userReducer;