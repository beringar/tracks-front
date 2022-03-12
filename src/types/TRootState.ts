import store from "../redux/store/index";

type TRootState = ReturnType<typeof store.getState>;

export default TRootState;
