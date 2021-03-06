// @flow

var React = require("react");
var Item = require('./Item.jsx');

class ItemList extends React.Component<{
        todoList: Array<Object>,
        openAssignWindow: Object,
        deleteItem: Object
    }> {

    constructor(props: Object){
        super(props);
    }

    render() {
        return(
            <div id="list">
            {
                this.props.todoList.map( elem =>
                    <Item key              = {elem.id}
                          todo             = {elem.todo}
                          todo_id          = {elem.id}
                          assigned_users   = {elem.assigned_users}
                          openAssignWindow = {this.props.openAssignWindow}
                          deleteItem       = {this.props.deleteItem}
                    />
                )
            }
            </div>
        );
    }
}

module.exports = ItemList;