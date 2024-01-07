import { FC, HTMLAttributes } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@pages/Home";
import Navigation from "@layout/navigations";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
    </Route>
  )
);
interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps>;
const App: AppComponents = () => {
  return <RouterProvider router={router} />;
};

export default App;
