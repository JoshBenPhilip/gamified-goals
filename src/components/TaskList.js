import { useEffect, useContext } from "react";
import { List } from "antd";
import Task from "./Task.js";
import { UserContext } from "../App.js";

export default function TaskList({ tasks, setTasks, loading, setLoading }) {
  // eslint-disable-next-line
  const { user } = useContext(UserContext);
  useEffect(() => {
    //GET DATA FROM API
    setLoading(true);
    fetch(`https://firestore-express-jbp.web.app/tasks/${user.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }, []);

  return (
    <List
      loading={loading}
      dataSource={tasks}
      size="large"
      bordered
      renderItem={(item) => (
        <Task item={item} setLoading={setLoading} setTasks={setTasks} />
      )}
    />
  );
}
