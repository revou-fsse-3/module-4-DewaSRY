import { FC, HTMLAttributes } from "react";
import type CategoryProps from "@utils/Category";
import { flexRender, type Table } from "@tanstack/react-table";
import TdActions from "../Actions/TdActions";
import Tr from "./Tr";
interface TbodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  table: Table<CategoryProps>;
}
type TbodyComponents = FC<TbodyProps>;
const Tbody: TbodyComponents = ({ table, ...resProps }) => {
  return (
    <tbody
      {...resProps}
      className={
        " text-lg " + `${resProps.className ? resProps.className : ""}`
      }
    >
      {table.getRowModel().rows.length
        ? table.getRowModel().rows.map((row, id) => (
            <Tr
              className={
                `${id % 2 === 0 ? "bg-gray-300" : "bg-gray-100"}` +
                " px-2 py-2  "
              }
              key={row.index}
            >
              <td>{id + 1}</td>
              {row.getVisibleCells().map((cel) => {
                return (
                  <td key={cel.id}>
                    {flexRender(cel.column.columnDef.cell, cel.getContext())}
                  </td>
                );
              })}
              <TdActions id={row.getValue("id")} />
            </Tr>
          ))
        : null}
    </tbody>
  );
};

export default Tbody;
