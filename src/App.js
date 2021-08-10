import React from 'react';
import './styles.css';

const Task = ({ id, name, description, completed }) => (
  <div className="task-parent">
    <h3>{name}</h3>
    <div>{description}</div>
    {completed ? <div>Completed</div> : <div>Not Completed</div>} 
    <button onClick={() => handleClick({id: id, completed: completed})}>Complete</button>
  </div>
)

const handleClick = ({id, completed}) => {
  console.log('Task ' + id + ' completed status = ' + completed)
}

class TodoList extends React.Component{
  state = {
    tasks: [
      {
        "id": 1,
        "name": "Wash the curtains",
        "description": 'living room + bedroom curtains',
        "completed": true
      },
      {
        "id": 2,
        "name": "Wash the dishes",
        "description": 'kitchen',
        "completed": false
      },
      {
        "id": 3,
        "name": "Buy new pillows",
        "description": 'ikea',
        "completed": false
      },
      {
        "id": 4,
        "name": "HW3 React",
        "description": 'Hi Valera',
        "completed": true
      }
    ]
  }

  TaskList = (tasks) => {
    return (
      <div>
        {tasks.map(it => <Task key={it.id} id={it.id} name={it.name} description={it.description} completed={it.completed} />)}
      </div>
    )
  }

  render () {
    return (
      <div className="parent-task-tracker">
        <h1 className="header">Task Tracker</h1>
        <div>{this.TaskList(this.state.tasks)}</div>
      </div>
    )
  }
}

const App = () => {
    return <TodoList />
}

export default App;
