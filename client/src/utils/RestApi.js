import axios from "axios";

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

// TODO : token 값 cookie에 저장하기
// const checkVerify = () => {
//   axios
//     .get("/api/auth/verify", {
//       headers: {
//         "x-access-token": token.accessToken,
//       },
//     })
//     .then((res) => {
//       console.log(res);
//     });
// };
export { login, logout };
