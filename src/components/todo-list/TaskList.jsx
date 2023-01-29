import { useEffect, useContext } from "react";
import { List } from "antd";
import {
  ShowCompletedTasksToggle,
  // ShowCompletedTaskToggleContext,
} from "./Task.jsx";
import Task from "./Task.jsx";
import { UserContext } from "../../App.js";
import { useState } from "react";

export default function TaskList({
  tasks,
  setTasks,
  incompleteTasks,
  setIncompleteTasks,
  loading,
  setLoading,
}) {
  // eslint-disable-next-line
  const { user } = useContext(UserContext);
  const [showIncompleteTasks, setShowIncompleteTasks] = useState(false);

  useEffect(() => {
    //GET DATA FROM API
    setLoading(true);
    fetch(`https://firestore-express-jbp.web.app/tasks/${user.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        // My Error before.
        // setIncompleteTasks(tasks.filter((task) => !task.done));
        //set IncompleteTasks to the data returned where task is not complete
        setIncompleteTasks(data.filter((task) => !task.done));
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, []);
  // console.log(incompleteTasks);
  // console.log(tasks);
  // if ((ShowCompletedTaskToggleContext = true)) {
  //   let TasksToShow = tasks;
  // } else if ((ShowCompletedTaskToggleContext = false)) {
  //   let TasksToShow = incompleteTasks;
  // }
  return (
    <>
      <label
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Show Completed Tasks?
        <ShowCompletedTasksToggle
          showIncompleteTasks={showIncompleteTasks}
          setShowIncompleteTasks={setShowIncompleteTasks}
        ></ShowCompletedTasksToggle>
      </label>
      {!showIncompleteTasks ? (
        <List
          loading={loading}
          // dataSource={TasksToShow}
          dataSource={tasks}
          size="large"
          bordered
          renderItem={(item) => (
            // add a conditional, if Toggle is true show task

            <Task item={item} setLoading={setLoading} setTasks={setTasks} />
          )}
        />
      ) : (
        <List
          loading={loading}
          // dataSource={TasksToShow}
          dataSource={incompleteTasks}
          size="large"
          bordered
          renderItem={(item) => (
            // add a conditional, if Toggle is true show task

            <Task item={item} setLoading={setLoading} setTasks={setTasks} />
          )}
        />
      )}
    </>
  );
}

// Props Context
