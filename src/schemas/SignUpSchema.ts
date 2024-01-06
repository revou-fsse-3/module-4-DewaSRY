import * as Yup from "yup";

const SignUpSchema = Yup.object({
  name: Yup.string()
    .matches(/[A-Z]/, "Insert Upper Case on your Full Name")
    .min(4, "please insert Full name at lest 4 letter")
    .required("Please insert your Full Name"),
  email: Yup.string().email("please insert valid email").required(),
  password: Yup.string()
    .min(8, "password need  more then 8 char")
    // .matches(/[A-Z]/, "Insert Upper Case on your user Password")
    .required("insert your password"),
});

export default SignUpSchema;
