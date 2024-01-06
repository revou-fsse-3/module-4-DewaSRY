import { FC, HTMLAttributes, PropsWithChildren } from "react";
import ContainerSigUp from "./ContainerSigUp";
import ContainerLogIn from "./ContainerLogIn";
import Submitting from "../../components/Submitting";
import { useSelectors } from "@redux/store";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  q: string;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, q, ...resProps }) => {
  const { isLoading, error } = useSelectors((s) => s.users);

  console.log(q);
  // console.log(error);
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {isLoading ? (
        <Submitting />
      ) : (
        <section className="mt-[3rem]">
          {q === "sign-up" ? <ContainerSigUp /> : <ContainerLogIn />}
        </section>
      )}
    </div>
  );
};

export default index;
