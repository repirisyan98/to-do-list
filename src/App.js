import Task from "./Task";
import NewTask from "./NewTask";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], itemsComplete: 0 };
  }

  addItem = (newItems) => {
    let tasks = this.state.items;
    tasks.push({ value: newItems });
    this.setState({ items: tasks });
  }

  completeItem = (newItems) => {
    this.setState({ items: newItems });
    this.setState({ itemsComplete: this.state.itemsComplete + 1 });
  }

  deleteItem = (newItems) => {
    this.setState({ items: newItems });
  }

  editItem = (newItems) => {
    this.setState({ items: newItems });
    console.log(this.state.items);
  }

  render() {
    return (
      <main className="font-sans" >
        <div className="container mx-auto bg-cream w-10/12 md:w-1/2 p-8 rounded">
          <h1 className="text-3xl mb-2">Welcome Back, User</h1>
          <div className="flex justify-between">
            <div><small className="text-neutral-600">You've got {this.state.items.length} task comming up</small></div>
            <div>
              <small className="text-neutral-600">{this.state.itemsComplete} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 30 30" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg></small>
            </div>
          </div>
          <hr className="my-5"></hr>
          <NewTask addItem={this.addItem} />
          <Task items={this.state.items} completeItem={this.completeItem} deleteItem={this.deleteItem} editItem={this.editItem} />
        </div>
      </main >
    );
  }
}

export default App;