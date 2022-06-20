import { useState } from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";
import ProgressBar from "./ProgressBar";
import ExpBar from "./ExpBar";

export default function Homepage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  const numOfTasks = tasks.length;
  const numOfTasksCompleted = tasks.filter((task) => task.done).length;
  const totalCharacterExp = numOfTasksCompleted * 100;
  const level = 1 + Math.floor(totalCharacterExp / 300);
  const expGainedForThisLevel = totalCharacterExp % 300;
  const percentageExpGainedForThisLevel = expGainedForThisLevel / 3;
  // const totalCoinsEarned = totalCharacterExp;
  // const totalCoinsSpent =
  // const totalCoinsNotSpent = totalCoinsEarned - totalCoinsSpent;
  // console.log(numOfTasks);
  console.log({ totalCharacterExp, level, expGainedForThisLevel });

  // const numOfTasksCompleted = tasksCompleted.length;

  return (
    <section
      style={{
        background: "white",
        padding: "0 40px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <section className="flex-container">
          {level === 1 ? (
            <img
              height="500rem"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/340px-Stick_Figure.svg.png"
              alt="Stick figure"
            />
          ) : level === 2 ? (
            <img
              height="500rem"
              src="https://i.pinimg.com/originals/1d/54/3e/1d543e5429b6fe1e33cb81ff61d91ca7.jpg"
              alt="villager"
            />
          ) : (
            <img
              height="500rem"
              src="https://i.pinimg.com/originals/48/9d/83/489d830eff9d5389e6712cad0f96e003.jpg"
              alt="dwarf"
            />
          )}
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkF7sfIsCpoazLfaoUolQvPTRAuUwoUo2_RA&usqp=CAU"
            alt="rpg character cleric"
          /> */}
          <h2> Character Level: {level}</h2>
          <h2>Experience for this level:</h2>
          <h2>{`${expGainedForThisLevel}xp / 300 xp`}</h2>
          <ExpBar
            percentageExpGainedForThisLevel={percentageExpGainedForThisLevel}
          />
        </section>
      </div>
      <br />
      <br />
      <div>
        <h2>Goal: Become a software engineer</h2>
        <ProgressBar
          totalGoalProgress={Math.round(
            (numOfTasksCompleted * 100) / numOfTasks
          )}
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
      </div>
    </section>
  );
}
