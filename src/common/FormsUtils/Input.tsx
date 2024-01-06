import { FC, InputHTMLAttributes, PropsWithChildren } from "react";
import Label from "./Label";
export interface InputProps extends InputHTMLAttributes<HTMLDivElement> {
  label: string;
}
type InputComponent = FC<InputProps> & PropsWithChildren;
const Input: InputComponent = ({ label, children, ...resProps }) => {
  return (
    <Label label={label}>
      <input
        {...resProps}
        name={label}
        className={
          "border-b-4 px-3 h-6 font-light text-lg lg:text-2xl py-6 " +
          "active:outline-none focus:outline-none" +
          `${resProps.className ? resProps.className : ""}`
        }
      />
      {children}
    </Label>
  );
};

export default Input;
