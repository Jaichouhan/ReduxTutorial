import { ActionType } from "../type";
import axios from "axios";

export const data = () => async (dispatch) => {
  try {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");

    dispatch({
      type: ActionType.GET_API,
      payload: res.data,
    });
  } catch (e) {
    // dispatch({
    //   type: ActionType.GET_ERROE,
    //   payload: console.log(e),
    // });
    console.log(e);
  }
};
