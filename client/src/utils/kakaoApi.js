const { Kakao } = window;

const login = (callback) => {
  Kakao.Auth.login({
    success: (res) => callback(res),
    fail: (err) => {
      console.error(err);
    },
    scope: "profile_nickname,profile_image,account_email,friends,talk_message",
  });
};

const hasToken = () => {
  if (Kakao.Auth.getAccessToken()) return true;
  return false;
};

const logout = () => {
  Kakao.Auth.logout();
};

const requestUserInfo = (callback) => {
  Kakao.API.request({
    url: "/v2/user/me",
    success: (res) => callback(res),
    fail: function (error) {
      console.log(error);
    },
  });
};
export { login, hasToken, logout, requestUserInfo };
