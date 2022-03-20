import actionTypes from "../actions/actionTypes";
import apiReducers from "./apiReducers";

describe("Given a apiReducers function", () => {
  describe("When it is called with setSubmitting action and a current state false", () => {
    test("Then it should return a new state with issubmitting set to true", () => {
      const currentState: boolean = false;

      const action = {
        type: actionTypes.setSubmitting,
      };

      const expectedState: boolean = true;

      const newState = apiReducers(currentState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When it is called with unsetSubmitting action and a current state true", () => {
    test("Then it should return a new state with issubmitting set to true", () => {
      const currentState: boolean = true;

      const action = {
        type: actionTypes.unsetSubmitting,
      };

      const expectedState: boolean = false;

      const newState = apiReducers(currentState, action);

      expect(newState).toEqual(expectedState);
    });
  });

  describe("When it is called with an empty state and an empty action", () => {
    test("Then it should return the new state set to false", () => {
      const currentState: boolean = false;

      const action = {
        type: null,
      };

      const newState = apiReducers(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
