import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface indexProps extends HTMLAttributes<HTMLElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <main
      {...resProps}
      className={
        "w-full  py-4 my-[4rem] px-6 bg-white rounded-xl" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      {children}
    </main>
  );
};

export default index;
