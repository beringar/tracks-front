import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createWrapper, Context } from "next-redux-wrapper";
import { Track } from "../../types/Track";

interface State {
  tracks: Track[];
}

const makeStore = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store>(makeStore, {
  debug: false,
});

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
