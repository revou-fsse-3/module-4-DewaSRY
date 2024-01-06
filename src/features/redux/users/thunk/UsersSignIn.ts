import { createAsyncThunk } from "@reduxjs/toolkit";
import { SigningResponse } from "@utils/Users/SignIn";
import { url } from "./index";
import { getCookies } from "@libs/cookies";
const UsersSignIn = createAsyncThunk<SigningResponse, void>(
  "SlideUsers" + "/UsersSignIn",
  async () => {
    let authCookie = getCookies();
    if (!authCookie) {
      throw new Error("User not log In");
    }
    const response = await fetch(url + "profile", {
      headers: {
        Authorization: "Bearer " + authCookie,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data as SigningResponse;
  }
);
export default UsersSignIn;
