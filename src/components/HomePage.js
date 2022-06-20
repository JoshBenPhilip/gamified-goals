import { useState } from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";

import ProgressBar from "./ProgressBar";

export default function Homepage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  const numOfTasks = tasks.length;
  const numOfTasksCompleted = tasks.filter((task) => task.done).length;
  const totalCharacterExp = numOfTasksCompleted * 100;
  const level = 1 + Math.floor(totalCharacterExp / 500);
  const expGainedForThisLevel = totalCharacterExp % 500;
  // console.log(numOfTasks);
  console.log({ totalCharacterExp, level, expGainedForThisLevel });

  // const numOfTasksCompleted = tasksCompleted.length;

  return (
    <section style={{ background: "white", padding: "0 40px 40px" }}>
      <h2>Goal: Become a software engineer</h2>
      <br />
      <ProgressBar
        totalGoalProgress={Math.round((numOfTasksCompleted * 100) / numOfTasks)}
      />
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
