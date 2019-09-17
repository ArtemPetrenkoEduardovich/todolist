const React        = require('react');
const connect      = require('react-redux').connect;
const todoActions  = require('../../actions/todo-actions.jsx');
const ToDoListForm = require('./classes/ToDoListForm.jsx');
const ItemList     = require('./classes/ItemList.jsx');


class TodoList extends React.Component {
 
    render() {
        return (
            <div id="todolist">
                <ToDoListForm addItem = {this.props.addItem}
                              title   = {this.props.title}
                />

                <ItemList todoList         = {this.props.todoList}
                          openAssignWindow = {this.props.openAssignWindow}
                          deleteItem       = {this.props.deleteItem}
                />
            </div>
        );
    }
};

 
function mapStateToProps(state) {
    return {
        title:    state.todoReducer.title,
        todoList: state.todoReducer.todoList,
        userList: state.userReducer.userList
    };
}

module.exports = connect(mapStateToProps, todoActions)(TodoList);