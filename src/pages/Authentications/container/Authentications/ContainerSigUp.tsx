import { FC, HTMLAttributes } from "react";
import SignUpSchema from "@schemas/SignUpSchema";
import FormFormic, {
  FormFieldSet,
  FormicInput,
  formSubmitHandler,
} from "@common/FormFormic";
import Button, { ButtonTypes } from "@/common/Button";
import store from "@redux/store";
import UsersSignUp from "@redux/users/thunk/UsersSignUp";
interface SigInContainer extends HTMLAttributes<HTMLFormElement> {}
const ContainerSigUp: FC<SigInContainer> = () => {
  return (
    <>
      <FormFormic
        className="w-11/12 mx-[5%] lg:mx-6  my-8 "
        validationSchema={SignUpSchema}
        formSubmitHandler={FormsSubmitHandler}
      >
        <FormFieldSet legend="Sign Up ">
          <FormicInput label="name" />
          <FormicInput label="email" />
          <FormicInput label="password" />
        </FormFieldSet>
        <Button type="submit" ButtonType={ButtonTypes.PrimaryButton}>
          Submit Forms
        </Button>
      </FormFormic>
    </>
  );
};

export default ContainerSigUp;
const FormsSubmitHandler: formSubmitHandler = (values, actions) => {
  const [name, email, password] = Object.values(values) as string[];
  store.dispatch(
    UsersSignUp({
      name: name,
      email: email,
      password: password,
    })
  );
  actions.setSubmitting(false);
};
/**
   *  name: string;
    email: string;
    password: string;
   */
