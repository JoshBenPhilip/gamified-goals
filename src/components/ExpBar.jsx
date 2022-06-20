import { Progress } from "antd";

export default function ExpBar({ expGainedForThisLevel }) {
  return (
    <>
      <p>Character Experience</p>
      <Progress percent={expGainedForThisLevel} />
    </>
  );
}
