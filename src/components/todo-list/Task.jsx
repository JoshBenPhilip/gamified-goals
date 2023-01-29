import { createContext, useState, useEffect, useContext } from "react";
import { List, Checkbox } from "antd";
import { UserContext } from "../../App";
import { Button } from "antd";
import { Switch } from "antd";

////my attempt at passing state from this file to any other file that imports it.
// export const [
//   showCompletedTaskToggleContext,
//   setShowCompletedTaskToggleContext,
// ] = useState({});

//The line below is to create a value and a value setter to later have the Tasks List check and only render tasks where completed = false when ShowCompletedTasksToggle is = false

//onChangeAction. onChangeAction currently console.logs switch to true or false depending on if the toggle's value is true or false.

//onChangeAction. onChangeAction currently console.logs switch to true or false depending on if the toggle's value is true or false.
// const onChangeAction = (checked) => {
// ShowCompletedTaskToggleContext = checked;
// console.log(`switch to ${ShowCompletedTaskToggleContext}`);
// };

//Working toggle that on change calls the function onChangeAction. onChangeAction currently console.logs switch to true or false depending on the toggle, Switch is an AntD component.
export const ShowCompletedTasksToggle = ({
  setShowIncompleteTasks,
  showIncompleteTasks,
}) => {
  const onChangeAction = () => {
    setShowIncompleteTasks(!showIncompleteTasks);
  };

  return <Switch defaultChecked onChange={onChangeAction} />;
};

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
