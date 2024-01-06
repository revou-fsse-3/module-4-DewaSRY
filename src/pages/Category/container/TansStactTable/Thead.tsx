import { FC, HTMLAttributes } from "react";
import type CategoryProps from "@utils/Category";
import { flexRender, type Table } from "@tanstack/react-table";
import Tr from "./Tr";
import { FaArrowsUpDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {
  table: Table<CategoryProps>;
}
type TheadComponents = FC<TheadProps>;
const Thead: TheadComponents = ({ table, ...resProps }) => {
  return (
    <thead
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <Tr
          className={
            "font-light text-xl underline text-gray-700" +
            " text-left   bg-gray-300 px-2"
          }
          key={headerGroup.id}
        >
          <th>NO</th>
          {headerGroup.headers.map((header) => {
            return (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div
                    title="cant be sorted"
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      // asc: " 🔼",
                      asc: <FaArrowUp className="inline text-sm" />,
                      // desc: " 🔽",
                      desc: <FaArrowDown className="inline text-sm" />,
                    }[header.column.getIsSorted() as string] ??
                      (header.column.getCanSort() && (
                        <FaArrowsUpDown className="inline text-sm" />
                      ))}
                  </div>
                )}
              </th>
            );
          })}
          <th>Active</th>
        </Tr>
      ))}
    </thead>
  );
};

export default Thead;
