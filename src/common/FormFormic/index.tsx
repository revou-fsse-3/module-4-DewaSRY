import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import type { ObjectSchema } from "yup";
import ProgressPercentage from "@common/Progress/ProgressPercentage";
import { Formik, FormikHelpers, FormikProps, Form } from "formik";
import * as OP from "@/utils/ObjectOperations";
import * as FormsUtils from "./FormFormic.utils";

interface FormCreator extends HTMLAttributes<HTMLFormElement> {
  validationSchema: ObjectSchema<Record<string, string | undefined>>;
  formSubmitHandler: formSubmitHandler;
  initialValues?: Record<string, string | undefined>;
}
type FormCreatorComponent = FC<FormCreator> & PropsWithChildren;
const FormCreator: FormCreatorComponent = ({
  children,
  validationSchema,
  formSubmitHandler,
  initialValues,
  ...restProps
}) => {
  const nameOfFieldsArr = OP.getObjectKey(validationSchema.fields);
  if (!initialValues) {
    initialValues = OP.getArrayToObject(nameOfFieldsArr) as InitialValuesProps;
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={formSubmitHandler}
    >
      {(props: FormikProps<Record<string, string | undefined>>) => (
        <Fragment>
          <ProgressPercentage
            denominator={nameOfFieldsArr.length}
            numerator={FormsUtils.countValue(props)}
          />
          <Form
            {...restProps}
            className={` ${restProps.className ? restProps.className : " "} `}
          >
            {children}
          </Form>
        </Fragment>
      )}
    </Formik>
  );
};
export default FormCreator;
export { default as FormFieldSet } from "./FormicFieldSet";
export { default as FormicInput } from "./FormicInput";
export { default as FormicSelect } from "./FormicSelect";
type InitialValuesProps = Record<string, string | undefined>;
export interface formSubmitHandler {
  (
    values: InitialValuesProps,
    actions: FormikHelpers<InitialValuesProps>
  ): void;
}
export interface FormikPropsHandler<T> {
  (props: FormikProps<InitialValuesProps>): T;
}
