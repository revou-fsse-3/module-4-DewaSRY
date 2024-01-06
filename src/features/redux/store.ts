import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import SlideUsers from "./users/SlideUsers";
import ApiCategory from "./Category/api/ApiCategory";
import SliceCategory from "./Category/SliceCategory";
const store = configureStore({
  reducer: {
    [SlideUsers.name]: SlideUsers.reducer,
    [SliceCategory.name]: SliceCategory.reducer,
    [ApiCategory.reducerPath]: ApiCategory.reducer,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware({
      serializableCheck: false,
    }).concat(ApiCategory.middleware);
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

type ActionsDispatch = typeof store.dispatch;
const useAppDispatch: () => ActionsDispatch = useDispatch;
const useSelectors: TypedUseSelectorHook<RootState> = useSelector;
export default store;
export { useAppDispatch, useSelectors };
