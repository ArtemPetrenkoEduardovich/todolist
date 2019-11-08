// @flow

const React = require("react");
const AddedUser = require('./AddedUser.jsx');

class AddedUsers extends React.Component <{
        assigned_users: Array<number>, 
        userList: Array<Object>,
        unassignUser: Object
    }> {

    constructor(props: Object) {
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
                                //    todo={this.props.assignWindowReducer.todo}
                                   user={user}
                                   unassignUser={this.props.unassignUser}
                        />
                        : null
                ))
            )
            }
            </div>
        );
    }
}
module.exports = AddedUsers;