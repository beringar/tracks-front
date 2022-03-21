import actionTypes from "../actionTypes";
import { User } from "../../../types/User";

export const loginUserAction = (user: User) => ({
  type: actionTypes.loginUser,
  user,
});
