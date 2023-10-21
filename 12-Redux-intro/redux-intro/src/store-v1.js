import { combineReducers, createStore } from "redux";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "accounts/deposit":
      return { ...state, balance: state.balance + action.payload };
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

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "accounts/deposit", payload: 800 });
// console.log(store.getState());
// store.dispatch({ type: "accounts/withdraw", payload: 300 });
// console.log(store.getState());
//
// store.dispatch({
//   type: "accounts/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a bike" },
// });
// console.log(store.getState());
// store.dispatch({
//   type: "accounts/payLoan",
// });
// console.log(store.getState());

function deposit(amount) {
  return { type: "accounts/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "accounts/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "accounts/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

function payLoan() {
  return {
    type: "accounts/payLoan",
  };
}

store.dispatch(deposit(8000));
console.log(store.getState());
store.dispatch(withdraw(3000));
console.log(store.getState());
store.dispatch(requestLoan(10000, "For Car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
store.dispatch(createCustomer("Kapil choudhary", "46454532"));
console.log(store.getState());
store.dispatch(deposit(5000));
console.log(store.getState());
