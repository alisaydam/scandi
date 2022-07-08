export const categoryReducer = (state = "all", action) => {
  if (action.type === "change-category") {
    state = action.category;
    return state;
  }
  return state;
};

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalCost: JSON.parse(localStorage.getItem("total")) || 0,
};

export const cartReducer = (state = initialState, action) => {
  if (action.type === "add-to-cart") {
    let produktArray = [];
    let cartTotalPrice;
    let sameProduct = state.cart.find((x) => {
      const cartProduct = JSON.stringify(x.id) + JSON.stringify(x.attributes);
      const addedProduct =
        JSON.stringify(action.productData.id) +
        JSON.stringify(action.productData.attributes);
      return cartProduct === addedProduct;
    });
    if (sameProduct) {
      if (sameProduct) {
        const index = state.cart.indexOf(sameProduct);
        sameProduct = {
          ...sameProduct,
          count: sameProduct.count + 1,
        };
        state.cart.splice(index, 1, sameProduct);

        produktArray = state.cart;
        cartTotalPrice = findTotal(produktArray);
        localStorage.setItem("cart", JSON.stringify(produktArray));
        localStorage.setItem("total", JSON.stringify(cartTotalPrice));
        state = {
          cart: [...state.cart, action.productData],
          totalCost: cartTotalPrice,
        };
        return state;
      }
    } else {
      produktArray = [...state.cart, action.productData];
      cartTotalPrice = findTotal(produktArray);
      localStorage.setItem("cart", JSON.stringify(produktArray));
      localStorage.setItem("total", JSON.stringify(cartTotalPrice));
      state = {
        cart: [...state.cart, action.productData],
        totalCost: cartTotalPrice,
      };
      return state;
    }

    return state;
  }
  if (action.type === "update-cart") {
    const edited = state.cart.find(
      (x) => x.uniqueID === action.productData.uniqueID
    );
    const index = state.cart.indexOf(edited);
    state.cart.splice(index, 1, action.productData);
    localStorage.setItem("cart", JSON.stringify(state.cart));
    return state;
  }
  if (action.type === "update-count") {
    const { id, operator } = action.data;

    const edited = state.cart.find((x) => x.uniqueID === id);
    const index = state.cart.indexOf(edited);
    if (edited.count === 1 && operator !== "+") {
      state.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      const cartTotalPrice = findTotal(state.cart);
      localStorage.setItem("total", JSON.stringify(cartTotalPrice));
      state.totalCost = cartTotalPrice;
      return state;
    }

    const newProduct = {
      ...edited,
      count: operator === "+" ? edited.count + 1 : edited.count - 1,
    };

    state.cart.splice(index, 1, newProduct);
    const cartTotalPrice = findTotal(state.cart);
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("total", JSON.stringify(cartTotalPrice));
    state.totalCost = cartTotalPrice;
    return state;
  }
  if (action.type === "update-cost") {
    state.totalCost = findTotal(state.cart);
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

// Calculate Total Price
const findTotal = (arr) => {
  const total = arr
    .map((x) => {
      return (
        x.prices.find(
          (y) => y.currency.symbol === localStorage.getItem("currency")
        ).amount * x.count
      );
    })
    .reduce((a, b) => {
      return a + b;
    }, 0)
    .toFixed(2);
  return total;
};