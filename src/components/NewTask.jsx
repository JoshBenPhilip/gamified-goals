import { Input } from "antd";
import { useState } from "react";

export default function NewTask({ setTasks, setLoading }) {
  const [newTask, setNewTask] = useState("");
  const handleButtonSubmit = () => {
    if (newTask.trim() === "") {
      // if the new task is empty
      return; // don't do anything
    }
    setLoading(true);
    const taskObject = {
      task: newTask,
    };
    fetch("mydb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    })
      .then(() => {
        setNewTask("");
        // cool, we added a new task, now lets update the list
        fetch("mydb")
          .then((response) => response.json())
          .then((data) => {
            setTasks(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };
  const handleInputText = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <Input.Search
      value={newTask}
      placeholder="Enter task name"
      enterButton="Add Task"
      size="large"
      onSearch={handleButtonSubmit}
      onChange={handleInputText}
    />
  );
}
