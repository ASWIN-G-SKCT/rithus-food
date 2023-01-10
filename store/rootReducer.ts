import auth from "./features/userSlice";
import cart from "./features/cartSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth,
  cart,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
