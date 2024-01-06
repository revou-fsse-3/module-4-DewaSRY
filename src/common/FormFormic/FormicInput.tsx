import { FC } from "react";
import { useField } from "formik";

import Input, { InputProps } from "@common/FormsUtils/Input";
const FormicInput: FC<InputProps> = ({ label, ...restProps }) => {
  const [field, meta] = useField(label);
  return (
    <Input label={label} {...field} {...restProps}>
      <p
        className={
          "text-red-400 " +
          ` ${meta.error && meta.touched ? "visible" : "invisible"} `
        }
      >
        {meta.error}
      </p>
    </Input>
  );
};

export default FormicInput;
