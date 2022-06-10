import { useEffect } from "react";
import { List } from "antd";
import Task from "./Task.js";

export default function TaskList({ tasks, setTasks, loading, setLoading }) {
  useEffect(() => {
    //GET DATA FROM API
    setLoading(true);
    fetch("myDbAddressHere")
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
        <Task item={item} setLoading={setloading} setTasks={setTasks} />
      )}
    />
  );
}
