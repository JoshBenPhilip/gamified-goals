import { Progress } from "antd";

export default function ProgressBar({ totalGoalProgress }) {
  return (
    <>
      <h2>Goal Progress</h2>
      <Progress percent={totalGoalProgress} />
    </>
  );
}
