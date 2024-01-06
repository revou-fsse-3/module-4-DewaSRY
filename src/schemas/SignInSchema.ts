import * as Yup from "yup";
const SignInSchema = Yup.object({
  email: Yup.string().email("please insert valid email").required(),
  password: Yup.string()
    .min(8, "password need  more then 8 char")
    .required("insert your password"),
});

export default SignInSchema;
