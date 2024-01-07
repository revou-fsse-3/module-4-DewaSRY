import { FC, HTMLAttributes, PropsWithChildren } from "react";
import usZustand from "@features/store";
import Button from "@/common/Button";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { count, decrement, increment } = usZustand((s) => s);
  const handelClick = () => {
    increment(1);
  };
  const handeldecermat = () => {
    decrement(1);
  };
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <h2>counte {count}</h2>

      <Button onClick={handelClick}>Add</Button>
      <Button onClick={handeldecermat}>incement</Button>
    </div>
  );
};

export default index;
