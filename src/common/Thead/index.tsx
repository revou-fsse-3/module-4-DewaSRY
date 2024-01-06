import { FC, HTMLAttributes } from "react";

interface indexProps extends HTMLAttributes<HTMLTableRowElement> {
  heads: string[];
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ heads, ...resProps }) => {
  return (
    <thead>
      <tr
        {...resProps}
        className={` ${resProps.className ? resProps.className : ""}`}
      >
        {heads.map((head, id) => (
          <th className="" key={head + id}>
            <span>{head}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default index;
