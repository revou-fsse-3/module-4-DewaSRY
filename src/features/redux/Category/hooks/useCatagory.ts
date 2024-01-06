import slice from "../SliceCategory";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "@redux/store";
import ApiCategory from "../api/ApiCategory";
import { useMemo } from "react";
export default function useCatagory() {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(slice.actions, dispatch), []);
}

export const {
  useCreateCategoryMutation,
  useGetListCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = ApiCategory;
