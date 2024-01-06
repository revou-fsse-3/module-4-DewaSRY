import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CategoryProps from "@/utils/Category";
import StateCategory from "./StateCategory";
import ApiCategory from "./api/ApiCategory";
// import { redirect } from "react-router-dom";
const name = "Category";
const SliceCategory = createSlice({
  name,
  initialState: StateCategory.getInitialState({}),
  reducers: {
    addManyCategory(state, actions: PayloadAction<CategoryProps[]>) {
      StateCategory.addMany(state, actions.payload);
    },
  },

  extraReducers(builder) {
    builder.addMatcher(
      ApiCategory.endpoints.CreateCategory.matchFulfilled,
      (_state, _actions) => {
        // StateCategory.addOne(state, actions.payload.data);
        window.location.href = "/category";
        // redirect("/category");
      }
    );
    builder.addMatcher(
      ApiCategory.endpoints.updateCategory.matchFulfilled,
      (_state, _actions) => {
        // StateCategory.addOne(state, actions.payload.data);
        window.location.href = "/category";
        // redirect("/category");
      }
    );
    builder.addMatcher(
      ApiCategory.endpoints.deleteCategory.matchFulfilled,
      (_state, _actions) => {
        // StateCategory.removeOne(state, actions.payload);
        window.location.href = "/category";
        // redirect("/category");
      }
    );
    builder.addMatcher(
      ApiCategory.endpoints.GetListCategory.matchFulfilled,
      (state, actions) => {
        StateCategory.addMany(state, actions.payload.data);
      }
    );
  },
});
export default SliceCategory;
export { name, StateCategory };
