import { CategorySelector } from "@redux/Category/StateCategory";
import { useCreateCategoryMutation } from "@redux/Category/hooks/useCatagory";
import store from "@/features/redux/store";
import { FC, HTMLAttributes } from "react";
import * as Yup from "yup";
import FormCreator, {
  FormFieldSet,
  FormicInput,
  formSubmitHandler,
} from "@/common/FormFormic";
import Button, { ButtonTypes } from "@/common/Button";
interface FormActionsProps extends HTMLAttributes<HTMLDivElement> {
  legend: string;
}
type FormActionsComponents = FC<FormActionsProps>;
const FormActions: FormActionsComponents = ({ legend, ...resProps }) => {
  const [addHandler, response] = useCreateCategoryMutation();

  const namesArr = CategorySelector.selectAll(store.getState()).reduce(
    (nameArr, CTG) => {
      nameArr.push(CTG.name.trim());
      return nameArr;
    },
    [] as string[]
  );
  console.log(namesArr);
  const FormsSubmitHandler: formSubmitHandler = (values, actions) => {
    const [name] = Object.values(values) as string[];
    setTimeout(() => {
      addHandler({
        name,
      });
      actions.setSubmitting(false);
      actions.resetForm();
    }, 500);
  };
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <FormCreator
        formSubmitHandler={FormsSubmitHandler}
        validationSchema={getValidation(namesArr)}
      >
        <FormFieldSet legend={legend}>
          <FormicInput label="name" />
          <Button
            type="submit"
            isLoading={response.isLoading}
            ButtonType={ButtonTypes.PrimaryButton}
          >
            Submit
          </Button>
        </FormFieldSet>
      </FormCreator>
    </div>
  );
};
function getValidation(names: string[]) {
  return Yup.object({
    name: Yup.string()
      .required("name")
      .test(
        "Name is already register",
        "this name is already register",
        (value) => {
          let isContain = names.includes(value);
          return !isContain;
        }
      )
      .min(3, "name at lest need to be longer"),
  });
}

export default FormActions;
