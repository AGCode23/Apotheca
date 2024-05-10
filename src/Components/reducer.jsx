export const initialState = {
  cart: [],
  loggedinuser: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "SET_LOGIN":
      return {
        ...state,
        loggedinuser: action.user,
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.log("Error");
      }
      return { ...state, cart: newCart };
  }
};

export default reducer;
