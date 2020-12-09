import {
  UPDATE_BALANCE,
  IS_FETCHING,
  FETCH_FAILED
} from "../constants/actions";
export const mainReducer = (state, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case UPDATE_BALANCE:
      const { symbol, balance } = action.payload;
      return {
        ...state,
        fetching: false,
        symbol,
        balance
      };
    case FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        failed: true
      };
    default:
      return { ...state };
  }
};
