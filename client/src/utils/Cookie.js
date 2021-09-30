import { Cookies } from "react-cookie";
import "./Dotenv";

// "development" env => http only option false
const HTTP_ONLY = process.env.NODE_ENV === "production";
const TOKEN_NAME = {
  accessToken: process.env.REACT_APP_AT_COOKIE_NAME,
  refreshToken: process.env.REACT_APP_RT_COOKIE_NAME,
};

// TODO : secure samesite option setting
const cookies = new Cookies();
const setCookie = (name, value, option) => {
  cookies.set(TOKEN_NAME[name], value, {
    ...option,
    httpOnly: HTTP_ONLY,
  });
};

const getCookie = (name) => {
  return cookies.get(TOKEN_NAME[name]);
};

const removeCookie = (name) => {
  cookies.remove(TOKEN_NAME[name]);
};
export { setCookie, getCookie, removeCookie };
