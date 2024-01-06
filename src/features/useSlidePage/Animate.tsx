import { HTMLAttributes, ReactElement, FC } from "react";

interface AnimateProps extends HTMLAttributes<HTMLDivElement> {
  fieldsSLides: ReactElement[];
  currentPositions: number;
}
type AnimateComponents = FC<AnimateProps>;
const Animate: AnimateComponents = ({
  fieldsSLides,
  currentPositions,
  ...resProps
}) => {
  const currentFieldSet = fieldsSLides[currentPositions];
  return (
    <div
      key={currentPositions}
      {...resProps}
      className={
        "test  flex-shrink-0 w-11/12 " +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      {currentFieldSet}
    </div>
  );
};

export default Animate;
