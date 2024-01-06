import { FC, HTMLAttributes, TdHTMLAttributes } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import Expand from "@common/Expanded";
import FormActions from "./FormsActions";
interface TdActionsProps extends TdHTMLAttributes<HTMLTableCellElement> {
  id: string;
}
type TdActionsComponents = FC<TdActionsProps>;
const TdActions: TdActionsComponents = ({ id, ...resProps }) => {
  return (
    <td
      {...resProps}
      className={
        "cursor-pointer  " + `${resProps.className ? resProps.className : ""}`
      }
      title="actions button"
    >
      <Expand
        expended={
          <div className="">
            <HiDotsHorizontal />
          </div>
        }
      >
        <Forms id={id} />
      </Expand>
    </td>
  );
};

export default TdActions;
interface FormsProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}
type FormsComponents = FC<FormsProps>;
const Forms: FormsComponents = ({ id, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <FormActions
        id={id}
        className={
          "absolute left-0 z-10 " + " w-full bg-white px-8 py-6 border-4"
        }
      />
    </div>
  );
};
