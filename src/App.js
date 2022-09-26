import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this);
    this.makeDomElement = this.makeDomElement.bind(this);
  }

  makeDomElement(task) {
    let domNode = document.createElement('div');
    domNode.textContent = task;
    document.querySelector('.taskContainer').appendChild(domNode);
  }

  addTask() {
    const newValue = document.getElementById('input').value;

    this.setState({
      tasks: [...this.state.tasks, newValue]
    });

    this.makeDomElement(newValue);
  }

  render() {
    return (
      <div className="App">
        <input id="input" type="text" placeholder="add task here"></input>
        <button onClick={this.addTask}>Submit</button>
        <div className="taskContainer"></div>
      </div>
    )
  }   
}

export default App;