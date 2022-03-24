import { User } from "../../types/User";
import actionTypes from "../actions/actionTypes";
import userReducers from "./userReducers";

describe("Given a userReducers function", () => {
  describe("When it is called with an empty state and the setUser action with a user", () => {
    test("Then it should return a new state containing the passed user", () => {
      const currentState: Object = {};
      const userTest: User = {
        name: "Beren",
        username: "bere",
        id: "oiuoiuoiu",
      };

      const action = {
        type: actionTypes.setUser,
        user: userTest,
      };

      const newState = userReducers(currentState, action);

      expect(newState).toEqual(userTest);
    });
  });

  describe("When it is called with an empty state and an empty action", () => {
    test("Then it should return the new state with an object with current state", () => {
      const currentState: Object = {};

      const action = {
        type: null,
      };

      const newState = userReducers(currentState, action);

      expect(newState).toEqual({});
    });
  });
});
