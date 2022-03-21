import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";

const userReducers = (currentUser = {}, action: AnyAction = { type: "" }) => {
  let newUser;
  if (action.type === actionTypes.setUser) {
    newUser = { ...action.user };
  } else {
    newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducers;
