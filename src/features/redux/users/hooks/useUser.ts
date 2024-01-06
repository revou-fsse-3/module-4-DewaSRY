import ThunkAction from "../thunk";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "@redux/store";

export default function useUser() {
  const dispatch = useAppDispatch();
  return bindActionCreators(ThunkAction, dispatch);
}
