import { Progress } from "antd";

export default function ExpBar({ percentageExpGainedForThisLevel }) {
  return (
    <>
      <Progress
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={percentageExpGainedForThisLevel}
      />
    </>
  );
}
