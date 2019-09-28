// @flow

const React = require("react");
const OptionUser = require('./OptionUser.jsx');

class UserList extends React.Component <{
        assigned_users: Array<number>, 
        userList: Array<Object>,
        assignUser: Object
    }> {

    handleChange: () => Object;

    constructor(props: Object) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: Object) {
        var index = event.target.selectedIndex;
        var optionElement = event.target.childNodes[index];
        var user_id =  optionElement.getAttribute('data-id');
        this.props.assignUser(user_id);
    }

    render() {
        return (
            <div id="user-list">
                <select onChange={this.handleChange}>
                    {
                        this.props.userList.map(user =>
                            this.props.assigned_users.includes(user.id) ? null :
                                <OptionUser key={user.id} user={user}/>
                        )
                    }
                </select>
            </div>
        );
    }
}
module.exports = UserList;