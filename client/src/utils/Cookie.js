import { Cookies } from "react-cookie";
import "./Dotenv";

const { NODE_ENV } = process.env;

const COOKIE_OPTION = {
  production: {
    secure: true,
    httpOnly: true,
    sameSite: "None",
  },
  development: {
    secure: false,
    httpOnly: false,
    sameSite: "Lax",
  },
};

const COOKIE_NAME = {
  accessToken: process.env.REACT_APP_AT_COOKIE_NAME,
  refreshToken: process.env.REACT_APP_RT_COOKIE_NAME,
};

// TODO : secure samesite option setting
const cookies = new Cookies();
const setCookie = (name, value) => {
  // [].po
  cookies.set(COOKIE_NAME[name], value, COOKIE_OPTION[NODE_ENV]);
};

const getCookie = (name) => {
  return cookies.get(COOKIE_NAME[name]);
};

const removeCookie = (name) => {
  cookies.remove(COOKIE_NAME[name]);
};
export { setCookie, getCookie, removeCookie };
