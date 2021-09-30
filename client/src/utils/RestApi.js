import axios from "axios";

import { getCookie } from "./Cookie";

const login = async (id, email, profile) => {
  const res = await axios.post("/api/auth/login", {
    name: profile.nickname,
    email,
    profileImage: profile.profile_image_url,
    social: { kakao: { id } },
  });
  return res.data;
};

const logout = () => {};

const checkVerify = () => {
  axios
    .get("/api/auth/verify", {
      headers: {
        "x-access-token": getCookie("accessToken"),
      },
    })
    .then((res) => {
      console.log(res);
    });
};
export { login, logout, checkVerify };
