import { useState } from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";
import ProgressBar from "./ProgressBar";
import ExpBar from "./ExpBar";
import "./HomePage.css";

export default function Homepage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState([]);
  const numOfTasks = tasks.length;
  const numOfTasksCompleted = tasks.filter((task) => task.done).length;
  const totalCharacterExp = numOfTasksCompleted * 100;
  const level = 1 + Math.floor(totalCharacterExp / 300);
  const expGainedForThisLevel = totalCharacterExp % 300;
  const percentageExpGainedForThisLevel = Math.floor(expGainedForThisLevel / 3);
  const totalCoinsEarned = totalCharacterExp;
  // const totalCoinsSpent =
  // const totalCoinsNotSpent = totalCoinsEarned - totalCoinsSpent;
  // console.log(numOfTasks);
  console.log({ totalCharacterExp, level, expGainedForThisLevel });

  // const numOfTasksCompleted = tasksCompleted.length;

  return (
    <section className="mainContainer">
      <h2>
        Directions: Create and complete tasks to level up and evolve your
        character.
      </h2>
      <section className="homepage">
        <div>
          <section>
            {/* {level === 1 ? (
              <img
                className="imageCarosel"
                // height="500rem"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/340px-Stick_Figure.svg.png"
                alt="Stick figure"
              />
            ) :  */}
            {level === 1 ? (
              <img
                className="imageCarosel"
                // height="500rem"
                src="https://i.pinimg.com/originals/1d/54/3e/1d543e5429b6fe1e33cb81ff61d91ca7.jpg"
                alt="villager"
              />
            ) : (
              <img
                className="imageCarosel"
                height="500rem"
                src="https://i.pinimg.com/originals/48/9d/83/489d830eff9d5389e6712cad0f96e003.jpg"
                alt="dwarf"
              />
            )}

            <h2> Character Level: {level}</h2>
            <h2>Experience for this level:</h2>
            <h2>{`${expGainedForThisLevel}xp / 300 xp`}</h2>
            {/* <ExpBar
            percentageExpGainedForThisLevel={percentageExpGainedForThisLevel}
          /> */}
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
          <h2>Tasks To Achieve Goal:</h2>

          <NewTask setTasks={setTasks} setLoading={setLoading} />
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            loading={loading}
            setLoading={setLoading}
          />
          <br />
        </div>
      </section>
    </section>
  );
}
