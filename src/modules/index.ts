import { combineReducers } from "redux";
import userInfoReducer from "./userInfo";
import registerInfoReducer from "./registerInfo";

const rootReducer = combineReducers({
    userInfo: userInfoReducer,
    registerInfo: registerInfoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
