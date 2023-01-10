import auth from "store/features/userSlice";
import cart from "store/features/cartSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth,
  cart,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
