import { useState } from "react";
import TaskList from "../../components/todo-list/TaskList";
import NewTask from "../../components/todo-list/NewTask";
import ProgressBar from "../../components/game-elements/ProgressBar";
import ExpBar from "../../components/game-elements/ExpBar";
import useGameLogic from "../../components/game-elements/useGameLogic";
import "./HomePage.css";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const gameLogic = useGameLogic(tasks);

  // const [loading, setLoading] = useState([]);
  // const [incompleteTasks, setIncompleteTasks] = useState([]);
  // const numOfTasks = tasks.length;
  // const numOfTasksCompleted = tasks.filter((task) => task.done).length;
  // const totalCharacterExp = numOfTasksCompleted * 100;
  // const level = 1 + Math.floor(totalCharacterExp / 300);
  // const expGainedForThisLevel = totalCharacterExp % 300;
  // const percentageExpGainedForThisLevel = Math.floor(expGainedForThisLevel / 3);
  // const totalCoinsEarned = totalCharacterExp;
  // const totalGoalProgress = Math.round(
  //   (numOfTasksCompleted * 100) / numOfTasks
  // );
  // // const totalCoinsSpent =
  // // const totalCoinsNotSpent = totalCoinsEarned - totalCoinsSpent;
  // // console.log(numOfTasks);
  // // console.log({ totalCharacterExp, level, expGainedForThisLevel });

  // // const numOfTasksCompleted = tasksCompleted.length;
  // // console.log(tasks);
  return (
    <section className="mainContainer">
      <h2>
        Directions: Create and complete tasks to level up and evolve your
        character.
      </h2>
      <section className="homepage">
        <div>
          <section>
            {/* {gameLogic.level === 1 ? (
              <img
                className="imageCarosel"
                // height="500rem"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/340px-Stick_Figure.svg.png"
                alt="Stick figure"
              />
            ) :  */}
            {gameLogic.level === 1 ? (
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

            <h2> Character Level: {gameLogic.level}</h2>
            <h2>Experience for this level:</h2>
            <h2>{`${gameLogic.expGainedForThisLevel}xp / 300 xp`}</h2>
            {/* <ExpBar
              percentageExpGainedForThisLevel={gameLogic.percentageExpGainedForThisLevel}
            /> */}
          </section>
        </div>
        <br />
        <br />
        <div>
          <div className="divtest">
            <h2>Goal: Become a software engineer</h2>
            <ProgressBar totalGoalProgress={gameLogic.totalGoalProgress} />
            <h2>Tasks To Achieve Goal:</h2>
          </div>
          <NewTask setTasks={setTasks} setLoading={gameLogic.setLoading} />
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            incompleteTasks={gameLogic.incompleteTasks}
            setIncompleteTasks={gameLogic.setIncompleteTasks}
            loading={gameLogic.loading}
            setLoading={gameLogic.setLoading}
          />

          <br />
        </div>
      </section>
    </section>
  );
}
