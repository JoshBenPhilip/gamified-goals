import { useEffect, useContext } from "react";
import { List } from "antd";
import Goal from "./Goal";
import { UserContext } from "../../App";

export default function GoalList({ goals, setGoals, loading, setLoading }) {
  const { user } = useContext(UserContext);
  // eslint-disable-next-line
  useEffect(() => {
    //GET DATA FROM API
    setLoading(true);
    fetch(`https://firestore-express-jbp.web.app/goals/${user.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setGoals(data);
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
      dataSource={goals}
      size="large"
      bordered
      renderItem={(item) => (
        <Goal item={item} setLoading={setLoading} setGoals={setGoals} />
      )}
    />
  );
}
