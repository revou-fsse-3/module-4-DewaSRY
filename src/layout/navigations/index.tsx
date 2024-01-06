import { FC, Fragment, HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";
import type { NavigationLoader } from "@utils/Route";
import { getCookies } from "@libs/cookies";
import Profile from "./container/Profile";
import { useSelectors } from "@/features/redux/store";
// import store from "@/features/redux/store";
// import UsersSignIn from "@/features/redux/users/thunk/UsersSignIn";
interface indexProps extends HTMLAttributes<HTMLElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ ...resProps }) => {
  const name = useSelectors((s) => s.users.data.name);
  return (
    <Fragment>
      <nav
        {...resProps}
        className={
          "relative " +
          "w-full bg-blue-300 h-[4rem] text-white pt-4 px-2 rounded-lg" +
          `${resProps.className ? resProps.className : ""}`
        }
      >
        <div className="absolute  right-0 z-20">
          <Profile className="" />
        </div>
        <div className="text-2xl">{name}</div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default index;
export const loader: NavigationLoader<Object> = async ({ request }) => {
  const auth = getCookies();
  const url = new URL(request.url);
  if (url.pathname !== "/") return {};
  if (!auth) {
    window.location.href = "/auth?mode=log-in";
  } else {
    window.location.href = "/category";
  }
  return {};
};
