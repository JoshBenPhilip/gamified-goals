import { useState, useEffect, useContext } from "react";
import { List, Checkbox } from "antd";
import { UserContext } from "../App";
import { Button } from "antd";

export default function Task({ item, setTasks, setLoading }) {
  const { user } = useContext(UserContext);
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
    fetch(`https://firestore-express-jbp.web.app/tasks/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
        // THEN: fetch our tasks
        fetch(`https://firestore-express-jbp.web.app/tasks/${user.uid}`)
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

  const handleTaskDelete = () => {
    setLoading(true);
    fetch(`https://firestore-express-jbp.web.app/tasks/delete/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !item.done }),
    })
      .then(() => {
        // THEN: fetch our tasks
        fetch(`https://firestore-express-jbp.web.app/tasks/${user.uid}`)
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
        >
          {item.task}
        </Checkbox>
        <Button onClick={handleTaskDelete}>Delete Task</Button>
      </List.Item>
    </>
  );
}
