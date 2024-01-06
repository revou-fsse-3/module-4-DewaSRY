import { FC, HTMLAttributes } from "react";
import AuthenticationsContainer from "./container/Authentications";
import Main from "@container/Main";
import type { NavigationLoader } from "@utils/Route";
import { useLoaderData } from "react-router-dom";
interface index extends HTMLAttributes<HTMLDivElement> {}
const Authentications: FC<index> = ({}) => {
  const { q } = useLoaderData() as LoaderProps;
  return (
    <Main className="">
      <AuthenticationsContainer q={q} />
    </Main>
  );
};

export default Authentications;
export interface LoaderProps {
  q: string;
}
export const loader: NavigationLoader<LoaderProps> = async ({ request }) => {
  const url = new URL(request.url);
  let q = url.searchParams.get("mode") || "sing-up";
  return { q };
};
