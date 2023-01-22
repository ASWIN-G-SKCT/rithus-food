import auth from "store/features/userSlice";
import cart from "./features/cartSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart,
  auth,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
