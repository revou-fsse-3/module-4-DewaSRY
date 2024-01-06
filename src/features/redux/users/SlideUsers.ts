import { createSlice } from "@reduxjs/toolkit";
import thunk from "./thunk";
import { setCookies } from "@libs/cookies";
const name = "users";
const SlideUsers = createSlice({
  name,
  initialState: {
    data: {
      name: "",
    },
    isLoading: false,
    error: null as null | Error,
  },
  reducers: {},

  extraReducers(builder) {
    //logIn props
    builder.addCase(thunk.UsersLogin.pending, (state, actions) => {
      const { requestStatus } = actions.meta;
      state.isLoading = requestStatus === "pending";
    });
    builder.addCase(thunk.UsersLogin.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = new Error(actions.error.message);
    });
    builder.addCase(thunk.UsersLogin.fulfilled, (state, actions) => {
      state.isLoading = false;
      setCookies(actions.payload.data.token);

      // store.dispatch(thunk.UsersSignIn());
      window.location.href = "/category";
    });
    //signUp props
    builder.addCase(thunk.UsersSignUp.pending, (state, actions) => {
      const { requestStatus } = actions.meta;
      state.isLoading = requestStatus === "pending";
    });
    builder.addCase(thunk.UsersSignUp.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = new Error(actions.error.message);
    });
    builder.addCase(thunk.UsersSignUp.fulfilled, (state, actions) => {
      state.isLoading = false;
      localStorage.setItem("password", actions.meta.arg.password);
      localStorage.setItem("email", actions.meta.arg.email);
      alert("sign up success you can login by this account now");
      window.location.href = "/auth?mode=log-in";
    });
    //signIn props
    builder.addCase(thunk.UsersSignIn.pending, (state, actions) => {
      const { requestStatus } = actions.meta;
      state.isLoading = requestStatus === "pending";
    });
    builder.addCase(thunk.UsersSignIn.rejected, (state, actions) => {
      state.isLoading = false;
      state.error = new Error(actions.error.message);
    });
    builder.addCase(thunk.UsersSignIn.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.data.name = actions.payload.data.name;
    });
  },
});

export default SlideUsers;
export { name };
