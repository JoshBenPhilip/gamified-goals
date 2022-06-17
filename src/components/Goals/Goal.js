import { useState, useEffect, useContext } from "react";
import { List, Checkbox } from "antd";
import { UserContext } from "../../App";

export default function Goal({ item, setGoals, setLoading }) {
  const { user } = useContext(UserContext);
  const [itemStyle, setItemStyle] = useState({});
  useEffect(() => {
    if (item.done) {
      setItemStyle({ color: "grey", textDecoration: "line-through" });
    } else {
      setItemStyle({ color: "black", textDecoration: "none" });
    }
  }, [item]);
  //   const handleToggleGoalDone = () => {
  //     setLoading(true);
  //     fetch(`https://firestore-express-jbp.web.app/goals/${item.id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ done: !item.done }),
  //     })
  //       .then(() => {
  //         // THEN: fetch our goals
  //         fetch(`https://firestore-express-jbp.web.app/goals/${user.uid}`)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             setGoals(data);
  //             setLoading(false);
  //           });
  //       })
  //       .catch((err) => {
  //         alert(err);
  //         setLoading(false);
  //       });
  //   };
  return (
    <>
      <p style={itemStyle}>{item.goal}</p>
    </>
  );
}
