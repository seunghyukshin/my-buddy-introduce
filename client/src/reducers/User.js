/* action */
const LOGIN = "USER/LOGIN";
const LOGOUT = "USER/LOGOUT";

/* action 생성 함수 */
export const login = (data) => {
  return { type: LOGIN, data };
};
export const logout = () => {
  return { type: LOGOUT };
};

/* Init */
const initState = {
  userInfo: null,
};

// reducer
export default function userReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userInfo: action.data,
      };
    case LOGOUT:
      return {
        ...state,
        userInfo: null,
      };
    default:
      return {
        ...state,
      };
  }
}
