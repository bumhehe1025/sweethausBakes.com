export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
          return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
          return {
            ...state,
            cart: state.cart.filter((c) => c.id !== action.payload.id),
          };
        case "CHANGE_CART_QTY":
          return {
            ...state,
            cart: state.cart.filter((c) =>
              c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
            ),
          };
        default:
          return state;
      }
    };
    
    export const productReducer = (state, action) => {
      switch (action.type) {
        case "SORT_BY_PRICE":
          return { ...state, sort: action.payload };
        case "SORT_BY_CALORIES":
            return {...state, sort: action.payload};
        case "FILTER_BY_STOCK":
          return { ...state, byStock: !state.byStock };
        case "FILTER_BY_DELIVERY":
          return { ...state, byFastDelivery: !state.byFastDelivery };
        case "FILTER_BY_PASTRY":
            return {...state, byPastry: !state.byPastry};
        case "FILTER_BY_CAKE":
            return {...state, byCake: !state.byCake};
        case  "FILTER_BY_BREAD":
            return {...state, byBread:!state.byBread};
        case "FILTER_BY_DRINK":
            return {...state, byDrink: !state.byDrink};
        case "FILTER_BY_NUT":
            return {...state, byNutFree: !state.byNutFree};
        case "FILTER_BY_DAIRY":
            return {...state, byDairyFree: !state.byDairyFree};
        case "FILTER_BY_SEARCH":
          return { ...state, searchQuery: action.payload };
        case "CLEAR_FILTERS":
          return { byStock: false, byFastDelivery: false, byPastry: false, byCake:false, byBread: false, byDrink: false, byNutFree:false, byDairyFree: false};
        default:
          return state;
      }
    };