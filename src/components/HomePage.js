import {useState} from "react";
import TaskList from 
import NewTask from

export default function Homepage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  return (
    <section style={{background: "white", padding: "0 40px 40px"}}>
      <TaskList
      tasks={tasks}
      setTasks={setTasks}
      loading={loading}
      setLoading={setLoading}
      />
      <br />
      <NewTask setTasks={setTasks} setLoading={setLoading} />
    </section>
  )
}
