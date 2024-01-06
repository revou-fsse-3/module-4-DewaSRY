import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpPayload, SignUpResponse } from "@utils/Users/SignUp";
import { url } from "./index";
const UsersSignUp = createAsyncThunk<SignUpResponse, SignUpPayload>(
  "SlideUsers" + "/UsersSignUp",
  async (args) => {
    const response = await fetch(url + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data as SignUpResponse;
  }
);
export default UsersSignUp;
