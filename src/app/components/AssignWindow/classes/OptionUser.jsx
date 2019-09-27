

const React = require("react");

class OptionUser extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <option data-id={this.props.user.id}>{this.props.user.name}</option>
    }
}
module.exports = OptionUser;