import { CategorySelector } from "@/features/redux/Category/StateCategory";
import store from "@/features/redux/store";
import * as Yup from "yup";
import FormCreator, {
  FormFieldSet,
  FormicInput,
  formSubmitHandler,
  FormicSelect,
} from "@/common/FormFormic";
import Button, { ButtonTypes } from "@/common/Button";
import DeleteButton from "./DeleteButton";
import { FC, HTMLAttributes } from "react";
import { useUpdateCategoryMutation } from "@redux/Category/hooks/useCatagory";

interface FormActionsProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}
type FormActionsComponents = FC<FormActionsProps>;
const FormActions: FormActionsComponents = ({ id, ...resProps }) => {
  const category = CategorySelector.selectById(store.getState(), id);
  const [updateHandler, response] = useUpdateCategoryMutation();
  const FormsSubmitHandler: formSubmitHandler = (values, actions) => {
    let [name, status] = Object.values(values) as string[];
    if (!name) {
      name: "no Name";
    }
    let is_active = status === "active";
    updateHandler({
      name,
      is_active,
      id,
    });
    actions.setSubmitting(false);
  };
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <FormCreator
        formSubmitHandler={FormsSubmitHandler}
        validationSchema={validationSchema}
        initialValues={{
          name: category.name,
          status: category.is_active ? "active" : "not active",
        }}
      >
        <FormFieldSet legend={"Update " + category.name + " Data"}>
          <FormicInput label="name" />
          <FormicSelect label="status" options={["active", "not active"]} />
          <Button
            isLoading={response.isLoading}
            type="submit"
            ButtonType={ButtonTypes.PrimaryButton}
          >
            Submit
          </Button>
          <DeleteButton id={id} />
        </FormFieldSet>
      </FormCreator>
    </div>
  );
};
const validationSchema = Yup.object({
  status: Yup.string(),
  name: Yup.string().required("name").min(3, "name at lest need to be longer"),
});

export default FormActions;
