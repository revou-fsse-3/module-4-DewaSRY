import { FC, HTMLAttributes } from "react";
import FormSchema from "@schemas/SignInSchema";
import FormFormic, {
  FormFieldSet,
  FormicInput,
  formSubmitHandler,
} from "@common/FormFormic";
import store from "@redux/store";
import UsersLogin from "@redux/users/thunk/UsersLogin";
import Button, { ButtonTypes } from "@/common/Button";
interface LogInContainer extends HTMLAttributes<HTMLDivElement> {}
const ContainerLogIn: FC<LogInContainer> = () => {
  return (
    <>
      <FormFormic
        className="w-11/12 mx-[5%] lg:mx-6  my-8 "
        validationSchema={FormSchema}
        formSubmitHandler={FormsSubmitHandler}
        initialValues={getInitValue()}
      >
        <FormFieldSet legend="Log in ">
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
export default ContainerLogIn;
const FormsSubmitHandler: formSubmitHandler = (values, actions) => {
  const [email, password] = Object.values(values) as string[];
  setTimeout(() => {
    store.dispatch(
      UsersLogin({
        email: email,
        password: password,
      })
    );
    actions.setSubmitting(false);
  }, 500);
};
function getInitValue() {
  let initValue = {
    email: "",
    password: "",
  };
  let getLocalEmail = localStorage.getItem("email");
  let getLocalPassword = localStorage.getItem("password");
  if (getLocalEmail) {
    initValue.email = getLocalEmail;
  }
  if (getLocalPassword) {
    initValue.password = getLocalPassword;
  }
  return initValue;
}
