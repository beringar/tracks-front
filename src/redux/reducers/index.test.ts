import rootReducer from "./";
import { createStore } from "redux";

describe("Given a rootReducer", () => {
  describe("When it's passed to function createStore", () => {
    test("It should load correctly the combined reducers and create tracks state as an empty array", () => {
      let store = createStore(rootReducer);

      expect(store.getState().tracks).toEqual([]);
    });
  });
});
