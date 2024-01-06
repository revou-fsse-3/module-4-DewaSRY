import { createColumnHelper } from "@tanstack/react-table";
import type CategoryProps from "@utils/Category";

const columnHelper = createColumnHelper<CategoryProps>();
const Columns = [
  columnHelper.accessor("id", {
    cell: () => null,
    header: "",
    enableSorting: false,
  }),
  columnHelper.accessor("name", {
    cell: (props) => <span>{props.getValue()}</span>,
    header: "name",
  }),
  columnHelper.accessor("is_active", {
    cell: (props) => <span>{props.getValue() ? "active" : "not active"}</span>,
    header: "Active",
  }),
  columnHelper.accessor("created_at", {
    cell: (props) => (
      <span>{new Date(props.getValue()).toLocaleDateString()}</span>
    ),
    header: "Create at",
  }),
  columnHelper.accessor("updated_at", {
    cell: (props) => (
      <span>{new Date(props.getValue()).toLocaleDateString()}</span>
    ),
    header: "Update ",
    // sortingFn:()
  }),
];

export default Columns;
