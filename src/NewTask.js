import React from "react";

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.props.addItem(newItem);
        this.setState({ text: '' });
    }
    render() {
        return (
            <div className="flex mb-2" >
                <div className="mr-3">
                    <input type={"checkbox"} onClick={this.handleClick}></input>
                </div>
                <div>
                    <input type={"text"} onChange={this.handleChange} value={this.state.text} placeholder="Add new Task ...." className="bg-transparent focus:border-none focus:border-transparent focus:ring-0"></input>
                </div>
            </div>
        );
    }
}

export default NewTask;