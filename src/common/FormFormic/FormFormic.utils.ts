// import DocumentOperations from "@/Utils/DocumentOperations";
import * as OP from "@utils/ObjectOperations";
import { FormikPropsHandler } from "./index";

const countValue: FormikPropsHandler<number> = (props) => {
  return OP.getCountArrayString(OP.getObjectValues(props.values));
};
const countError: FormikPropsHandler<number> = (props) => {
  return OP.getCountArrayString(OP.getObjectValues(props.errors));
};

export { countValue, countError };
