// @flow

const initialState = {
    dialog : false
};

type State = Object

function dialogReducer(state : State = initialState, action: Object) {

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