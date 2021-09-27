const { Kakao } = window;

const login = () => {
  Kakao.Auth.login({
    success: (res) => loginSuccess(res),
    fail: (err) => {
      console.error(err);
    },
    scope: "profile_nickname,profile_image,account_email,friends,talk_message",
  });
};

// TODO : Redux 적용 후 store에 res 저장
const loginSuccess = () => {};

const hasToken = () => {
  if (Kakao.Auth.getAccessToken()) return true;
  return false;
};

const logout = () => {
  Kakao.Auth.logout();
};
export { hasToken, logout };
