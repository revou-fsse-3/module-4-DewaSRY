import Cookies from "js-cookie";

const CookiesName = "auth";

const getCookies = () => {
  return Cookies.get(CookiesName);
};

const setCookies = (auth) => {
  Cookies.set(CookiesName, auth, { expires: 1 / 8 });
};
export { getCookies, setCookies };
