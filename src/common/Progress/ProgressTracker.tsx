import { FC, HTMLAttributes } from "react";
import Progress from "./index";
interface ProgressStep extends HTMLAttributes<HTMLSpanElement> {
  trackerLabel: number;
  currentTracker: number;
}

const ProgressStep: FC<ProgressStep> = ({
  trackerLabel,
  currentTracker,
  ...restProps
}) => {
  return (
    <>
      <span
        {...restProps}
        title="halloo"
        className={
          `${currentTracker + 1 >= trackerLabel ? "border-blue-500" : ""} ` +
          "border-[3px]  rounded-[50%] py-2 px-4  cursor-pointer  bg-white text-blue-500 outline-none  font-bold "
        }
      >
        {trackerLabel}
      </span>
    </>
  );
};

interface FormProgressProps extends HTMLAttributes<HTMLDivElement> {
  amountOfStep: number;
  currentTrack: number;
  trackerController?: (any: number) => void;
}
const ProgressTracker: FC<FormProgressProps> = ({
  amountOfStep,
  currentTrack,
  trackerController,
}) => {
  const handlerTracker = (step: number) => () => {
    if (trackerController) trackerController(step);
  };
  return (
    <div className="mx-auto w-9/12 flex justify-between my-4 relative outline-none z-10">
      {Array(amountOfStep)
        .fill(null)
        .map((_, i) => {
          return (
            <ProgressStep
              onClick={handlerTracker(i)}
              key={i}
              currentTracker={currentTrack}
              trackerLabel={i + 1}
            />
          );
        })}
      <Progress numerator={currentTrack} denominator={amountOfStep - 1} />
    </div>
  );
};

export default ProgressTracker;
