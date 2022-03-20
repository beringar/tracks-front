import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";

const apiReducers = (
  currentSubmittingState: boolean = false,
  action: AnyAction = { type: "" }
) => {
  let newSubmittingState: boolean;
  switch (action.type) {
    case actionTypes.setSubmitting:
      newSubmittingState = true;
      break;
    case actionTypes.unsetSubmitting:
      newSubmittingState = false;
      break;
    default:
      newSubmittingState = currentSubmittingState;
  }
  return newSubmittingState;
};

export default apiReducers;
