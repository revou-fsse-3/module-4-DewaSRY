import Expanded from "@common/Expanded";
import H2 from "@common/H2";
import { FC, HTMLAttributes } from "react";
import FormActions from "./FormActionss";
interface NewNameFormsProps extends HTMLAttributes<HTMLDivElement> {}
type NewNameFormsComponents = FC<NewNameFormsProps>;
const NewNameForms: NewNameFormsComponents = ({ ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        "inline-block " + ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <Expanded
        expended={
          <div className="w-[12rem] border-b-4 my-8">
            <H2>Add new Name</H2>
          </div>
        }
      >
        <FormActions
          className={
            "absolute left-0 z-10 " + " w-full bg-white px-8 py-6 border-4"
          }
          legend="Add new  Name"
        />
      </Expanded>
    </div>
  );
};

export default NewNameForms;
