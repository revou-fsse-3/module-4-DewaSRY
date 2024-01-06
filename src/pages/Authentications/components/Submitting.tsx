import { FC, HTMLAttributes } from "react";
import Shimmer from "@/common/Shimmer";
interface SubmittingProps extends HTMLAttributes<HTMLDivElement> {}
type SubmittingComponents = FC<SubmittingProps>;
const Submitting: SubmittingComponents = ({}) => {
  return (
    <div>
      <Shimmer times={3} className="mb-2.5 py-6" />
    </div>
  );
};

export default Submitting;
