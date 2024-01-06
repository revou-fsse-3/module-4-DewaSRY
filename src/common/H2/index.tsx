import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface indexProps extends HTMLAttributes<HTMLHeadElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <h2 className="text-2xl my-4 mx-2 " {...resProps}>
      {children}
    </h2>
  );
};

export default index;
