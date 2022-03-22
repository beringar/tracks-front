import actionTypes from "../actionTypes";
import { setUserAction } from "./userActionCreator";

describe("Given a setUserAction action", () => {
  describe("When it's called with an array of tracks", () => {
    test("Then it should return an object with the action type and the array", () => {
      const user = {
        username: "pedro8",
        name: "Pedro Páramo",
        id: "1234",
        password: "oiuoiuoiuoiu",
      };

      const expectedAction = {
        type: actionTypes.setUser,
        user,
      };

      const action = setUserAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
