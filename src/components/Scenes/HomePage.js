import { useState } from "react";
import TaskList from "../Tasks/TaskList";
import GoalList from "../Goals/GoalList";
import NewTask from "../Tasks/NewTask";
import NewGoal from "../Goals/NewGoal";

export default function Homepage() {
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  return (
    <>
      <section style={{ background: "white", padding: "0 40px 40px" }}>
        <GoalList
          goals={goals}
          setGoals={setGoals}
          loading={loading}
          setLoading={setLoading}
        />
        <br />
        <NewGoal setGoals={setGoals} setLoading={setLoading} />
      </section>

      <section style={{ background: "white", padding: "0 40px 40px" }}>
        <NewTask setTasks={setTasks} setLoading={setLoading} />
        <br />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          loading={loading}
          setLoading={setLoading}
        />
      </section>
    </>
  );
}
