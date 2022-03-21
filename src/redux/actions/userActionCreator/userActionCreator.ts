import actionTypes from "../actionTypes";

export const setUserAction = (user) => ({
  type: actionTypes.setUser,
  user,
});
