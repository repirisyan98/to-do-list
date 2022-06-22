import React from "react";

class Task extends React.Component {

    completeItem = (e, index) => {
        let newItems = this.props.items && this.props.items.filter((element, i) => i !== e);
        this.props.completeItem(newItems);
    }

    deleteItem = (e, index) => {
        let newItems = this.props.items && this.props.items.filter((element, i) => i !== e);
        this.props.deleteItem(newItems);
    }

    editItem = (e, index) => {
        let newItem = this.props.items;
        newItem[e].value.text = index.target.value;
        this.props.editItem(newItem)
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        return <div className="flex bg-white p-4 rounded mb-2" key={item.value.id}>
                            <div className="flex-none mr-2">
                                <input type={"checkbox"} onClick={this.completeItem.bind(this, index)}></input>
                            </div>
                            <div className="flex-auto">
                                <div>
                                    <textarea onBlur={this.editItem.bind(this, index)} className="w-full border-transparent">{item.value.text}</textarea>
                                </div>
                                <div className="float-right"><button onClick={this.deleteItem.bind(this, index)} type="button"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></button></div>
                            </div>
                        </div >
                    })
                }
            </div >
        );
    }
}

export default Task;