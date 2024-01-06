import { FC, FormHTMLAttributes, PropsWithChildren } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}
type FormComponents = FC<FormProps> & PropsWithChildren;
const Form: FormComponents = ({ children, ...resProps }) => {
  return (
    <form
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
    </form>
  );
};

export default Form;
