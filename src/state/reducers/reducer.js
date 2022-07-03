export const categoryReducer = (state = "all", action) => {
  if (action.type === "change-category") {
    state = action.category;
    return state;
  }
  return state;
};

const cart = JSON.parse(localStorage.getItem("cart")) || [];

export const cartReducer = (state = cart, action) => {
  if (action.type === "add-to-cart") {
    cart.push(action.productData);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(state);
    return state;
  }
  return state;
};

export const selectedCurrency = (
  state = localStorage.getItem("currency") || "$",
  action
) => {
  if (action.type === "change-currency") {
    localStorage.setItem("currency", action.currency);
    state = action.currency;
  }
  return state;
};
