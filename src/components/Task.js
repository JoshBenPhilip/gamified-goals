import { useState, useEffect } from "react";
import { List, Checkbox } from "antd";

export default function Task({ item, setTasks, setLoading }) {
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({ color: "grey", textDecoration: "line-through" });
    } else {
      setItemStyle({ color: "black", textDecoration: "none" });
    }
  }, [item]);
  const handleToggleTaskDone = () => {
    setLoading(true);
    fetch(`mydb/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
        // THEN: fetch our tasks
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
  return (
    <>
      <List.Item style={itemStyle}>
        <Checkbox
          style={{ margin: "10px" }}
          onClick={handleToggleTaskDone}
          checked={item.done}
        ></Checkbox>
        {item.task}
      </List.Item>
    </>
  );
}
