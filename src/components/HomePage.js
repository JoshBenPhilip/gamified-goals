import { useState } from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  return (
    <section style={{ background: "white", padding: "0 40px 40px" }}>
      <>this is my boiler plate text</>
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
