import { FC, LabelHTMLAttributes, PropsWithChildren, useMemo } from "react";
import * as SOP from "@/utils/StringOperations";
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
}
type LabelComponent = FC<LabelProps> & PropsWithChildren;
const Label: LabelComponent = ({ label, children, ...resProps }) => {
  const CapitalizeLabel = useMemo(
    () => SOP.getStringCamelChaseToLabel(label),
    []
  );
  return (
    <label {...resProps} className="form-field  flex flex-col min-h-[6rem] ">
      <h3 className=" font-light text-lg ">{CapitalizeLabel}</h3>
      {children}
    </label>
  );
};

export default Label;
