import { FC } from "react";
import { useField } from "formik";

import Select, { SelectProps } from "@common/FormsUtils/Select";
const FormFieldInput: FC<SelectProps> = ({ label, options, ...restProps }) => {
  const [field, meta] = useField(label);

  return (
    <Select options={options} label={label} {...field} {...restProps}>
      <p
        className={
          "text-red-400 " +
          ` ${meta.error && meta.touched ? "visible" : "invisible"} `
        }
      >
        {meta.error}
      </p>
    </Select>
  );
};

export default FormFieldInput;
