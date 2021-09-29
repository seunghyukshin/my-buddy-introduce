import { promisify } from "util";

const verifyRefresh = async (token, username) => {
  const getAsync = promisify(redisClient.get).bind(redisClient);
  const SUCCESS_RESULT = { ok: true };
  const FAIL_RESULT = { ok: false };
  try {
    const data = await getAsync(username);
    // TODO : exp를 먼저 조사하여 만료되었는지 확인
    if (token === data) {
      return SUCCESS_RESULT;
    } else {
      return FAIL_RESULT;
    }
  } catch (error) {
    return FAIL_RESULT;
  }
};

export default verifyRefresh;
