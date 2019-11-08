// @flow

const React = require("react");

class OptionUser extends React.Component<{user: Object}> {

    constructor(props: Object) {
        super(props);
    }

    render() {
        return <option data-id={this.props.user.id}>{this.props.user.name}</option>
    }
}
module.exports = OptionUser;