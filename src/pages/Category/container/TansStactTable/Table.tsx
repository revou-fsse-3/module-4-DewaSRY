import { FC, HTMLAttributes, useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import Columns from "./Columns";
import Thead from "./Thead";
import Tbody from "./Tbody";

import type CategoryProps from "@/utils/Category";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: CategoryProps[];
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ data, ...resProps }) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns: Columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <div
      {...resProps}
      className={
        "w-full  overflow-x-scroll pb-4 " +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <table className="">
        <Thead table={table} />
        <Tbody table={table} />
      </table>
    </div>
  );
};

export default index;
