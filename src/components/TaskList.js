import { useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

export default function TaskList({ tasks, setTasks, loading, setLoading }) {
  useEffect(() => {
    // GET DATA FROM API
    setLoading(true);
    fetch("")
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
