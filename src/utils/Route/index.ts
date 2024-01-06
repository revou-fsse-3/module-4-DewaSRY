import { LoaderFunctionArgs } from "react-router-dom";

export interface NavigationLoader<T> {
  (value: LoaderFunctionArgs): Promise<T>;
}
