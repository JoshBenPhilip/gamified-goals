import { Progress } from "antd";

export default function ProgressBar({ totalGoalProgress }) {
  return (
    <>
      <Progress percent={totalGoalProgress} />
    </>
  );
}
