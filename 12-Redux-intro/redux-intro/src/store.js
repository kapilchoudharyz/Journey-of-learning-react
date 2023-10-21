import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice.jsx";
import customerReducer from "./features/customers/customerSlice.jsx";

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});
export default store;
