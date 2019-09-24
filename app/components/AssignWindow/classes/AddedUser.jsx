const React = require("react");

class AddedUser extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.unassignUser(this.props.user.id);
    }

    render() {
        return (<span onClick = {this.onClick.bind(this)}>{this.props.user.name}</span>);
    }
}
module.exports = AddedUser;