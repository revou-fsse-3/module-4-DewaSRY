import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface TrProps extends HTMLAttributes<HTMLTableRowElement> {}
type TrComponents = FC<TrProps> & PropsWithChildren;
const Tr: TrComponents = ({ children, ...resProps }) => {
  return (
    <tr
      {...resProps}
      className={
        " grid grid-cols-table" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      {children}
    </tr>
  );
};

export default Tr;
