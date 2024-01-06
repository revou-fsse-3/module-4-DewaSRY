import { createAsyncThunk } from "@reduxjs/toolkit";
import { LogInPayload, LogInResponse } from "@utils/Users/LogIn";
import { url } from "./index";
// console.log(name);
const UsersLogin = createAsyncThunk<LogInResponse, LogInPayload>(
  "SlideUsers" + "/UsersLogin",
  async (args) => {
    const response = await fetch(url + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(args),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data as LogInResponse;
  }
);
export default UsersLogin;
