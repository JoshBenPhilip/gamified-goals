import { Progress } from "antd";

export default function ProgressBar({ totalGoalProgress }) {
  return (
    <>
      <p>Goal Progress to Completion</p>
      <Progress percent={totalGoalProgress} />
    </>
  );
}
