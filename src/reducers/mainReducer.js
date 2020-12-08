export const mainReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      console.log("UPDATE_BALANCE reducer");
      return {
        ...state,
        loading: false,
        balance: action.balance
      };
    case "LOADING":
      console.log("loading reducer");
      return {
        ...state,
        loading: true
      };
    default:
      return { ...state };
  }
};
