import { FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import Animate from "./Animate";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  fieldsSLides: ReactElement[];
  currentPositions: number;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({
  fieldsSLides,
  currentPositions,
  ...resProps
}) => {
  return (
    <div
      {...resProps}
      className={
        "w-full h-full flex gap-[10%] my-4 transition-transform  overflow-x-hidden" +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      <Animate
        fieldsSLides={fieldsSLides}
        currentPositions={currentPositions}
      />
    </div>
  );
};

export default index;
