import { FC, HTMLAttributes } from "react";
import Authentications, {
  loader as AuthenticationsLoader,
} from "@pages/Authentications";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navigation, { loader as NavigationLoader } from "@layout/navigations";
import Category, { loader as CategoryLoader } from "@pages/Category";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route loader={NavigationLoader} path="/" element={<Navigation />}>
      <Route loader={CategoryLoader} path="/category" element={<Category />} />
      <Route
        loader={AuthenticationsLoader}
        path="/auth"
        element={<Authentications />}
      />
    </Route>
  )
);
interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps>;
const App: AppComponents = () => {
  return <RouterProvider router={router} />;
};

export default App;
