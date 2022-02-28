import { ActionType } from "../type";

const initialState = {
  user: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_API:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
