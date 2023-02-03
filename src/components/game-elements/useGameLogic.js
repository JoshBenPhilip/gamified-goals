import { useState } from "react";

export default function useGameLogic(tasks) {
  const [loading, setLoading] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const numOfTasks = tasks.length;
  const numOfTasksCompleted = tasks.filter((task) => task.done).length;
  const totalCharacterExp = numOfTasksCompleted * 100;
  const level = 1 + Math.floor(totalCharacterExp / 300);
  const expGainedForThisLevel = totalCharacterExp % 300;
  const percentageExpGainedForThisLevel = Math.floor(expGainedForThisLevel / 3);
  const totalCoinsEarned = totalCharacterExp;
  const totalGoalProgress = Math.round(
    (numOfTasksCompleted * 100) / numOfTasks
  );
  // const totalCoinsSpent =
  // const totalCoinsNotSpent = totalCoinsEarned - totalCoinsSpent;
  // console.log(numOfTasks);
  // console.log({ totalCharacterExp, level, expGainedForThisLevel });

  // const numOfTasksCompleted = tasksCompleted.length;
  // console.log(tasks);
  return {
    loading,
    setLoading,
    incompleteTasks,
    setIncompleteTasks,
    numOfTasks,
    numOfTasksCompleted,
    totalCharacterExp,
    level,
    expGainedForThisLevel,
    percentageExpGainedForThisLevel,
    totalCoinsEarned,
    totalGoalProgress,
  };
}
