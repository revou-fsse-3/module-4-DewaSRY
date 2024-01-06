import { FC, HTMLAttributes, Fragment } from "react";

const outer = "relative overflow-hidden bg-gray-100 rounded  p-2 ",
  inner =
    "animate-shimmer absolute inset-0  -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200 ";
interface ShimmerProps extends HTMLAttributes<HTMLDivElement> {
  times: number;
}
type ShimmerComponents = FC<ShimmerProps>;
const Shimmer: ShimmerComponents = ({ times, ...resProps }) => {
  return (
    <Fragment>
      {Array(times)
        .fill(0)
        .map((_v, id) => (
          <div
            {...resProps}
            key={id}
            className={
              `${outer ? outer : " "}` +
              `${resProps.className ? resProps.className : ""}`
            }
          >
            <div className={`${inner ? inner : " "}`} />
          </div>
        ))}
    </Fragment>
  );
};

export default Shimmer;
