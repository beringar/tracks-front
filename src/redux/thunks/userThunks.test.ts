import actionTypes from "../actions/actionTypes";
import { setUserAction } from "../actions/userActionCreator/userActionCreator";
import { loginUserThunk } from "./userThunks";

describe("Given a setUserThunk function", () => {
  describe("When it's invoked with valid username and password", () => {
    test("Then it should call the dispatch function", async () => {
      const user = {
        username: "Beren",
        password: "asasas",
      };

      const dispatch = jest.fn();

      const action = {
        type: actionTypes.setUser,
        user: {
          username: "Beren",
          name: "Berenguer",
          iat: 1648058337,
          id: "6228d9e2d3b484d4871608ee",
        },
      };

      const toastInstance = () => {};

      await loginUserThunk(toastInstance, user)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's invoked with valid username and password", () => {
    test("Then it should call the dispatch function", async () => {
      const user = {
        username: "Paquito",
        password: "xxxx",
      };

      const dispatch = jest.fn();

      const toastInstance = jest.fn();

      await loginUserThunk(toastInstance, user)(dispatch);

      expect(toastInstance).toHaveBeenCalled();
    });
  });
});
