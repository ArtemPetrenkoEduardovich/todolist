const React = require("react");
const OptionUser = require('./OptionUser.jsx');

class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
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


                        // this.props.todoList.map(
                        //     item => (item.id === this.props.assignWindowReducer.todo_id) ? (
                        //         this.props.userList.map(
                        //             user => item.assigned_users.includes(user.id) ? null :
                        //                 <OptionUser key={user.id} user={user}/>
                        //         )
                        //     ) : null
                        // )
                    }
                </select>
            </div>
        );
    }
}
module.exports = UserList;