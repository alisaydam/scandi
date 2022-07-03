const currency = localStorage.getItem("currentcyChoice");
localStorage.setItem("currency", "$");
const initialState = {
  selectedCategory: "all",
  currency: currency || "$",
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "add") {
    state = { ...state, num: action.num };
    return state;
  }
  if (action.type === "dec") {
    return state - action.payload;
  }
  if (action.type === "mul") {
    return state * action.payload;
  }
  return state;
};
export const selectedCurrency = (
  state = localStorage.getItem("currency") || "$",
  action
) => {
  if (action.type === "add") {
    return state;
  }
  if (action.type === "dec") {
    return state - action.payload;
  }
  if (action.type === "mul") {
    return state * action.payload;
  }
  return state;
};

export default reducer;
