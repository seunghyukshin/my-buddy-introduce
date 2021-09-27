import { promisify } from "util";

const verifyRefresh = async (token, username) => {
  const getAsync = promisify(redisClient.get).bind(redisClient);
  const SUCCESS_RESULT = { ok: true };
  const FAIL_RESULT = { ok: false };
  try {
    const data = await getAsync(username);
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
