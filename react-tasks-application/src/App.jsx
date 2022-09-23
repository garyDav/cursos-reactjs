import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState, useEffect } from 'react'

import { tasks as data } from './data/tasks'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask({ title, description }) {
    setTasks([...tasks, { title, id: tasks.length, description }])
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
