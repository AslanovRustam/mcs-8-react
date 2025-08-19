import { configureStore, createAction } from "@reduxjs/toolkit";

export const deposit = createAction("balance/deposit");

export const withdraw = createAction("balance/withdraw");

export const changeLang = createAction("locale/changeLang");

const balanceReducer = (state = { value: 100 }, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };

    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

const localeReducer = (state = { lang: "uk" }, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
  },
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//         },
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };

//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };
