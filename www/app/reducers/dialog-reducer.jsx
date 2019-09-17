const initialState = {
    dialog : false
};


function dialogReducer(state = initialState, action) {

    switch (action.type) {

        case 'CLOSE_DIALOG_AND_ASSIGN' :
            return {
                ...state,
                dialog : false
            };

        case 'SHOW_DIALOG' :
            return {
                ...state,
                dialog : true
            };

        case 'CLOSE_DIALOG' :
            return {
                ...state,
                dialog : false
            };

        default: return state;
    }
}

module.exports = dialogReducer;