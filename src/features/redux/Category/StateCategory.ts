import CategoryProps from "@/utils/Category";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
const StateCategory = createEntityAdapter<CategoryProps>({
  sortComparer: (a, b) => a.created_at.localeCompare(b.created_at),
});

export default StateCategory;

export const CategorySelector = StateCategory.getSelectors(
  (state: RootState) => state.Category
);
// const booksSelectors = booksAdapter.getSelectors((state) => state.books)
