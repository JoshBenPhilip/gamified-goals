import { Input } from "antd";
import { useState, useContext } from "react";
import { UserContext } from "../../App";

export default function NewGoal({ setGoals, setLoading }) {
  const { user } = useContext(UserContext);
  const [newGoal, setNewGoal] = useState("");
  const handleButtonSubmit = () => {
    if (newGoal.trim() === "") {
      //if the new goal is empty
      return; // don't do anything
    }
    setLoading(true);
    const taskObject = {
      goal: newGoal,
      userId: user.uid,
    };
    fetch("https://firestore-express-jbp.web.app/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObject),
    })
      .then(() => {
        setNewGoal("");
        //cool, we added a new Goal, now lets update the list
        fetch(`https://firestore-express-jbp.web.app/goals/${user.uid}`)
          .then((response) => response.json())
          .then((data) => {
            setGoals(data);
            setLoading(false);
          });
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };
  const handleInputText = (event) => {
    setNewGoal(event.target.value);
  };
  return (
    <Input.Search
      value={newGoal}
      placeholder="Enter Goal name"
      enterButton="Set Goal"
      size="large"
      onSearch={handleButtonSubmit}
      onChange={handleInputText}
    />
  );
}
