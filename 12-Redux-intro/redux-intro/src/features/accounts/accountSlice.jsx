import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (!state.loan) return;
      state.loan = action.payload.amount;
      state.purpose = action.payload.purpose;
      state.balance = state.balance + action.payload.amount;
    },
    payLoan(state) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
    convertingCurrency(state) {
      state.loading = true;
    },
  },
});

console.log(accountSlice);
export const { withdraw, payLoan, requestLoan } = accountSlice.actions;
console.log(requestLoan(10000, "wdcbj"));
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "accounts/deposit", payload: amount };
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    //API call
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    console.log(converted);
    // return action
    dispatch({ type: "accounts/deposit", payload: converted });
  };
}
export default accountSlice.reducer;
/*
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "accounts/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "accounts/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "accounts/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "accounts/payLoan":
      return {
        ...state,
        loanPurpose: "",
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}



export function withdraw(amount) {
  return { type: "accounts/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "accounts/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

export function payLoan() {
  return {
    type: "accounts/payLoan",
  };
}*/
