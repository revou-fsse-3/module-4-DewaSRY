import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Table from "./container/TansStactTable";
import type { NavigationLoader } from "@utils/Route";
import { useLoaderData } from "react-router-dom";
import Main from "@container/Main";
import UsersSignIn from "@/features/redux/users/thunk/UsersSignIn";
// import { getCookies } from "@/libs/cookies";
import store from "@/features/redux/store";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { q, previousTotal } = useLoaderData() as CategoryLoader;
  return (
    <Main
      {...resProps}
      className={" " + `${resProps.className ? resProps.className : ""}`}
    >
      <Table
        page={Number(q)}
        previousTotal={Number(previousTotal)}
        className="max-w-max  overflow-X-scroll"
      />
    </Main>
  );
};

export default index;

interface CategoryLoader {
  q: string;
  previousTotal: string;
}

export const loader: NavigationLoader<CategoryLoader> = async ({ request }) => {
  const url = new URL(request.url);
  let q = Number(1).toString();
  let previousTotal = Number(0).toString();
  store.dispatch(UsersSignIn());
  let searchPreviousTotal = url.searchParams.get("total");
  let searchPage = url.searchParams.get("page");
  if (searchPage !== null) {
    q = searchPage;
  }
  if (searchPreviousTotal !== null) {
    previousTotal = searchPreviousTotal;
  }

  return {
    q,
    previousTotal,
  };
};
