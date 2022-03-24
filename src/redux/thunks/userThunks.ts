import { AppDispatch } from "../store";
import jwtDecode from "jwt-decode";
import { setUserAction } from "../actions/userActionCreator/userActionCreator";
import {
  setSubmittingAction,
  unsetSubmittingAction,
} from "../actions/ApiActionCreator/ApiActionCreator";

export const loginUserThunk =
  (toast, user) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingAction());
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TRACKS_API_URL}users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const responseData = await response.json();
    if (responseData.token) {
      const userData = jwtDecode(responseData.token);
      localStorage.setItem("userToken", responseData.token);
      dispatch(setUserAction(userData));
      toast({
        title: "Login successful!",
        description: `You are looged in as ${user.username}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login failed!",
        description: `${responseData.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    dispatch(unsetSubmittingAction());
  };
