import { combineReducers } from "redux";
import userInfo from "./userInfo";

const rootReducer = combineReducers({
    userInfo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
