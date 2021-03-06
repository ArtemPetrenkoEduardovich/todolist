// @flow

const React       = require("react");
const ReactDOM    = require('react-dom');
const connect     = require('react-redux').connect;
const todoActions = require('../../actions/todo-actions.jsx');

class DialogWindow extends React.Component<{
    closeDialog: Object,
    closeDialogAndAssign: Object,
    dialogReducer: Object    
    }> {

    constructor(props) {
        super(props);
    }

    clickNo() {
        this.props.closeDialog();
    }

    clickYes() {
        this.props.closeDialogAndAssign();
    }

    render() {
        const dialogContainer = document.getElementById("dialog-container");
        
        if (this.props.dialogReducer.dialog && dialogContainer !== null) {
            return ReactDOM.createPortal(
                <>
                    <div className="canvas"/>
                    <div id="dialog">
                        <h1>Are you sure?</h1>
                        <input type="submit" value="Yes" onClick={this.clickYes.bind(this)}/>
                        <input type="submit" value="No" onClick={this.clickNo.bind(this)}/>
                    </div>
                </>,
                dialogContainer
            );
        } else {return null;}
    }
}

function mapStateToProps(state) {
    return {
        dialogReducer : state.dialogReducer
    };
}

module.exports = connect(mapStateToProps, todoActions)(DialogWindow);