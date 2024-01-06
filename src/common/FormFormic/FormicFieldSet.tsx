import { FC, FieldsetHTMLAttributes, PropsWithChildren } from "react";
export interface FormFieldProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
}
type FormicFieldsetComponent = FC<FormFieldProps> & PropsWithChildren;
const FormicFieldSet: FormicFieldsetComponent = ({
  children,
  legend,
  ...restProps
}) => {
  return (
    <fieldset {...restProps} className="">
      <legend className="text-center font-light text-2xl my-6">{legend}</legend>
      {children}
    </fieldset>
  );
};

export default FormicFieldSet;
