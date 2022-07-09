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
  console.log(state.cart)
  if (action.type === "add-to-cart") {
    let produktArray = [];
    let cartTotalPrice = 0;
    let sameProduct = state.cart.find((x) => {
      const cartProduct = JSON.stringify(x.id) + JSON.stringify(x.attributes);
      const addedProduct =
        JSON.stringify(action.productData.id) +
        JSON.stringify(action.productData.attributes);
      return cartProduct === addedProduct;
    });
    if (sameProduct) {
      if (sameProduct) {
        console.log("same prod")
        const index = state.cart.indexOf(sameProduct);
        sameProduct = {
          ...sameProduct,
          count: sameProduct.count + 1,
        };
        console.log(state.cart)
        state.cart.splice(index, 1, sameProduct);
        console.log(state.cart)

        produktArray = state.cart;
        localStorage.setItem("cart", JSON.stringify(produktArray));
        state = {
          cart: [...state.cart],
          totalCost: cartTotalPrice,
        };
        localStorage.setItem("cart", JSON.stringify(produktArray));
        return state
      }
    } else {
      produktArray = [...state.cart, action.productData];
      localStorage.setItem("cart", JSON.stringify(produktArray));
      state = {
        cart: [...state.cart, action.productData],
        totalCost: cartTotalPrice,
      };
    }
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
    } else {
      const newProduct = {
        ...edited,
        count: operator === "+" ? edited.count + 1 : edited.count - 1,
      };

      state.cart.splice(index, 1, newProduct);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }

  }
  if (action.type === "update-cost") {
    state.totalCost = findTotal(state.cart);
  }
  // console.log(state.cart);
  const total = findTotal(state.cart);
  localStorage.setItem("total", JSON.stringify(total));
  state.totalCost = total;
  return state;
};

export const selectedCurrency = (
  state = localStorage.getItem("preferredCurrency") || "$",
  action
) => {
  if (action.type === "change-currency") {
    localStorage.setItem("preferredCurrency", action.currency);
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
          (y) => y.currency.symbol === localStorage.getItem("preferredCurrency")
        ).amount * x.count
      );
    })
    .reduce((a, b) => {
      return a + b;
    }, 0)
    .toFixed(2);
  console.log(total);
  return total;
};
