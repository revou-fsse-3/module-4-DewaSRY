import { FC, HTMLAttributes } from "react";
import TrackerComponent from "./index";
interface ProgressPercentageProps extends HTMLAttributes<HTMLDivElement> {
  numerator: number;
  denominator: number;
}
const ProgressPercentage: FC<ProgressPercentageProps> = ({
  numerator,
  denominator,
  ...restProps
}) => {
  let percentage = Math.round((numerator / denominator) * 100);
  if (percentage < 0) {
    percentage = 0;
  }
  return (
    <div
      {...restProps}
      className={"w-9/12 m-auto h-5 relative rounded-xl" + ``}
    >
      <TrackerComponent
        numerator={numerator}
        denominator={denominator}
        className="w-9/12"
      />
      <span
        className={
          `${
            percentage === 100 || percentage === 0 ? "text-white" : "text-black"
          } ` +
          "absolute right-4 top-[50%] translate-y-[-50%] text-xl font-bold"
        }
      >
        {percentage} %
      </span>
    </div>
  );
};

export default ProgressPercentage;
