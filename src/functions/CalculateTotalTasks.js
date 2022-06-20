import { useEffect, useContext } from "react";
import { List } from "antd";
import { UserContext } from "../App";
import Task from "../components/Task";

export default function CalculateTotalTasks({ tasks, setTasks }) {
  // eslint-disable-next-line
  const { user } = useContext(UserContext);
  useEffect(() => {
    //GET DATA FROM API
    fetch(`https://firestore-express-jbp.web.app/tasks/${user.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  console.log(tasks);
}
