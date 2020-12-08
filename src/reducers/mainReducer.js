import {
  UPDATE_BALANCE,
  IS_FETCHING,
  FETCH_FAILED
} from "../constants/actions";
export const mainReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_BALANCE:
      const { symbol, balance } = action.payload;
      return {
        ...state,
        loading: false,
        symbol,
        balance
      };
    case IS_FETCHING:
      return {
        ...state,
        loading: true
      };
    case FETCH_FAILED:
      return {
        ...state,
        failed: true
      };
    default:
      return { ...state };
  }
};
