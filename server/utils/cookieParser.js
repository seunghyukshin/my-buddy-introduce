const COOKIE_NAME = {
  accessToken: process.env.AT_COOKIE_NAME,
  refreshToken: process.env.RT_COOKIE_NAME,
};

const cookieParser = (cookieString, tokenType) => {
  const tokenIndex = cookieString.indexOf(COOKIE_NAME[tokenType]);
  const semicolonIndex = cookieString.indexOf(";", tokenIndex);
  let token = cookieString.slice(
    tokenIndex + COOKIE_NAME[tokenType].length + 1,
    semicolonIndex
  );
  /* cookieString의 마지막 값 파싱 예외처리 */
  if (semicolonIndex === -1)
    token += cookieString.charAt(cookieString.length - 1);
  return token;
};

export default cookieParser;
