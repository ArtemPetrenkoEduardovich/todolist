var React = require("react");

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
        this.openAssignWindow = this.openAssignWindow.bind(this);
        let count = this.props.assigned_users.length;
        this.state = {
            class : "",
            count : count
        };
    }

    componentWillReceiveProps(nextProps) {
        let count = nextProps.assigned_users.length;
        this.setState({
            class : "",
            count : count
        });
    }

    onMouseEnterHandler() {
        this.setState({class: "strikethrough"});
    }

    onMouseLeaveHandler() {
        this.setState({class: ""});
    }

    openAssignWindow() {
        this.props.openAssignWindow(
            this.props.todo,
            this.props.todo_id,
            this.props.assigned_users
        );
    }

    render() {
        return <div className="item">
            <div className="nameOfItem">
                <p className={this.state.class}>{this.props.todo}</p>
            </div>

            <div className="countOfAssignedUsers">
                <h6>{this.state.count}</h6>
            </div>

            <input className="assignButton"
                   type="button"
                   value="assign"
                   onClick={this.openAssignWindow}/>

            <input className="deleteButton"
                   type="button"
                   value="delete"
                   onClick={() => (this.props.deleteItem(this.props.todo_id))}
                   onMouseEnter={this.onMouseEnterHandler}
                   onMouseLeave={this.onMouseLeaveHandler}/>
        </div>
    }
};

module.exports = Item;