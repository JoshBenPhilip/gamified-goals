import { useState } from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";

export default function Homepage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  return (
    <section style={{ background: "white", padding: "0 40px 40px" }}>
      <h1>Gamified Goals</h1>
      <h2>Goal: Become a software engineer</h2>
      <br />
      <h2>Steps To Achieve Goal:</h2>

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        loading={loading}
        setLoading={setLoading}
      />
      <br />
      <NewTask setTasks={setTasks} setLoading={setLoading} />
    </section>
  );
}
