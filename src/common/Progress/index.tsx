import { FC, HTMLAttributes } from "react";

interface TrackerProps extends HTMLAttributes<HTMLDivElement> {
  numerator: number;
  denominator: number;
}
const Progress: FC<TrackerProps> = ({
  numerator,
  denominator,
  ...restProps
}) => {
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] z-[-2] h-1 w-full bg-gray-400"
      {...restProps}
    >
      <span
        style={{
          width: Math.round((numerator / denominator) * 100) + "%",
        }}
        className="absolute  h-full  bg-blue-500 rounded-xl"
      ></span>
    </div>
  );
};

export default Progress;
