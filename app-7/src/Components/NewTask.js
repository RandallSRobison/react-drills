import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleUpdateInput(value){
      this.setState({input: value})
  }

  handleAdd(){
      this.props.add(this.state.input)
      this.setState({input: "" })
  }

  render() {
    return (
        <div>
        <input
        value={this.state.input}
        placeholder='enter new task'
        onChange={e => this.handleUpdateInput(e.target.value)}
         />

         <button onClick={this.handleAdd}>add task</button>
         </div>

    )
  }
}

export default NewTask
