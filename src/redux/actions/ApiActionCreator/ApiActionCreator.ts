import actionTypes from "../actionTypes";

export const setSubmittingAction = () => ({
  type: actionTypes.setSubmitting,
});

export const unsetSubmittingAction = () => ({
  type: actionTypes.unsetSubmitting,
});
