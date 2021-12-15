import axios from "axios";

import { getCookie } from "./Cookie";

const login = async (id, email, profile) => {
  const res = await axios.post("/api/auth/login", {
    name: profile.nickname,
    email,
    profileImage: profile.profile_image_url,
    social: { kakao: { id } },
  });

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${res.data.token.accessToken}`;

  return res.data;
};

const logout = () => {};

const checkVerify = () => {
  axios
    .get("/api/auth/verify", {
      headers: {
        Authorization: getCookie("accessToken"),
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export { login, logout, checkVerify };
