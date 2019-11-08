// @flow

const React        = require("react");
const ReactDOM     = require('react-dom');
const connect      = require('react-redux').connect;
const todoActions  = require('../../actions/todo-actions.jsx');
const UserList     = require('./classes/UserList.jsx');
const AddedUsers   = require('./classes/AddedUsers.jsx');


class AssignWindow extends React.Component<{
        userList: Array<Object>,
        last_id: number,
        assignWindowReducer: Object,
        assigned_users: Array<number>,
        assignUser: Object,
        unassignUser: Object,
        showDialog: Object,
        saveAssignWindow: Object
    }, {
        userList: Array<Object>,
        last_id: number,
        assignWindowReducer: Object,
        assigned_users: Array<number>,
        assignUser: Object,
        unassignUser: Object
    }> {

    onKeyDownHandler: () => Object;
    assignUser: () => Object;
    unassignUser: () => Object;
    saveClick: () => Object;
	
	constructor(props) {
		super(props);
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
        this.assignUser       = this.assignUser.bind(this);
        this.unassignUser     = this.unassignUser.bind(this);
        this.saveClick        = this.saveClick.bind(this);
	}

    componentWillReceiveProps(nextProps) {
        this.setState({
            userList            : [...this.props.userList],
            last_id             : this.props.last_id,
            assignWindowReducer : this.props.assignWindowReducer,
            assigned_users      : [...this.props.assignWindowReducer.assigned_users],
            assignUser          : this.assignUser,
            unassignUser        : this.unassignUser
        });
    }

	onKeyDownHandler(e) {
		if (e.keyCode === 13){
			if (this.refs.userInput.value !== "") {
				let userName = this.refs.userInput.value;
				this.refs.userInput.value ="";

				this.setState({
                    userList : [...this.state.userList, {
                        name : userName,
                        id   : (this.state.last_id + 1)
                    }],
                    last_id  : (this.state.last_id + 1),
                    assigned_users : [...this.state.assigned_users, (this.state.last_id + 1)]
                });
		    }
		}
	}

    assignUser (user_id: number) {
        this.setState({
            assigned_users : [...this.state.assigned_users, user_id]
        });
    }

    unassignUser (user_id) {
	    this.setState({
            assigned_users : [...this.state.assigned_users.filter((id) => id !== user_id)]
        });
    }

	closeAssignWindow() {
        this.props.showDialog();
    }

    saveClick() {
        this.props.saveAssignWindow(
            this.state.userList,
            this.state.last_id,
            this.state.assigned_users,
            this.state.assignWindowReducer.todo_id
        );
    }

  	render() {
        const assignContainer = document.getElementById("assign-container");

		if (this.props.assignWindowReducer.isOpen && assignContainer !== null) {
            return ReactDOM.createPortal(
                <>
                    <div className="canvas"/>

                    <div id="assign-window">
                        <h2>{this.state.assignWindowReducer.todo}</h2>
                        <div id="close-assign" onClick={this.closeAssignWindow.bind(this)}>X</div>

                        <UserList {...this.state}/>

                        <input id="new-user"
                               type="input"
                               ref="userInput"
                               maxLength="29"
                               onKeyDown={this.onKeyDownHandler}/>

                        <AddedUsers {...this.state}/>

                        <div id="btns-block">
                            <input onClick={this.saveClick.bind(this)} type="submit" value="Save"/>
                            <input type="submit" value="Cancel" onClick={this.closeAssignWindow.bind(this)}/>
                        </div>
                    </div>
                </>,
                assignContainer
            );
        } else {return null;}
	}
}


function mapStateToProps(state: Object) {
    return {
        todoList            : state.todoReducer.todoList,
        userList            : state.userReducer.userList,
		last_id             : state.userReducer.last_id,
        assignWindowReducer : state.assignWindowReducer
    };
}

module.exports = connect(mapStateToProps, todoActions)(AssignWindow);






