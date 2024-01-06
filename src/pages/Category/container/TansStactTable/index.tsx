import { FC, TableHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { CategorySelector } from "@/features/redux/Category/StateCategory";
import store from "@/features/redux/store";
import { useGetListCategoryQuery } from "@redux/Category/hooks/useCatagory";
import Shimmer from "@/common/Shimmer";
import Button, { ButtonTypes } from "@/common/Button";
import NewNameForms from "../NewForms/NewNameForms";
import TansStactTable from "./Table";
// import CategoryProps from "@/utils/Category";
interface TableProps extends TableHTMLAttributes<HTMLDivElement> {
  page: number;
  previousTotal: number;
}
type TableComponents = FC<TableProps>;
const Table: TableComponents = ({ page, previousTotal }) => {
  const data = CategorySelector.selectAll(store.getState());
  const totalItem = CategorySelector.selectTotal(store.getState());
  const { isLoading, estimateData } = useGetListCategoryQuery(page, {
    selectFromResult: (result) => {
      return {
        ...result,
        estimateData: result.data?.total_item ?? 0,
      };
    },
  });

  const dataLeft = estimateData - totalItem - 1;
  const navigate = useNavigate();
  const handelButton = () => {
    if (previousTotal === totalItem) return;
    navigate(`?page=${page + 1}&total=${totalItem}`);
  };

  return (
    <div className="px-4 py-6 relative ">
      <NewNameForms />
      <TansStactTable data={data} />
      {isLoading ? (
        <div className="w-full md:w-10/12">
          <Shimmer className="mb-2.5 py-4" times={6} />
        </div>
      ) : null}

      <Button
        className="py-4 px-8"
        hidedButton={previousTotal === totalItem || dataLeft === 0}
        ButtonType={ButtonTypes.SecondaryButton}
        onClick={handelButton}
      >
        Fetch More data, {dataLeft} item left
      </Button>
    </div>
  );
};

export default Table;
