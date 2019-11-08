// @flow

var React = require("react");

class ToDoListForm extends React.Component<{
        addItem: Object,
        title: string
    }> {

    onKeyDownHandler: () => Object;

    constructor(props: Object) {
        super(props);
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    }

    onClick() {
        if (this.refs.itemInput.value !== "") {
            var itemText = this.refs.itemInput.value;
            this.refs.itemInput.value ="";
            return this.props.addItem(itemText);
        }
    }

    onKeyDownHandler(e: Object) {
        if (e.keyCode === 13) this.onClick();
    }

    render() {
        return(
            <div id="todo">
                <h2>{this.props.title}</h2>
                <input ref="itemInput"
                       maxLength="40"
                       onKeyDown={this.onKeyDownHandler}></input>
                <input type="button" name="add" value="add" onClick = {this.onClick.bind(this)} />
            </div>
        );
    }
};

module.exports = ToDoListForm;