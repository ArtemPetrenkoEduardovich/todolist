const React = require("react");
const AddedUser = require('./AddedUser.jsx');

class AddedUsers extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="added-users">
            {
            this.props.assigned_users.map(el =>
                (this.props.userList.map(user =>
                    user.id === el ?
                        <AddedUser key={user.id}
                                   todo={this.props.assignWindowReducer.todo}
                                   user={user}
                                   unassignUser={this.props.unassignUser}
                        />
                        : null
                ))
            )


            // this.props.todoList.map( (item) => (
            //     (item.id === this.props.assignWindowReducer.todo_id) ?
            //         item.assigned_users.map((el) => (
            //             this.props.userList.map(
            //                 user => el === user.id ?
            //                     <AddedUser key={user.id}
            //                                todo={item}
            //                                user={user}
            //                                unassignUser={this.props.unassignUser}
            //                     />
            //                     : null
            //             )
            //             )
            //         ): null
            //     )
            // )
            }
            </div>
        );
    }
}
module.exports = AddedUsers;