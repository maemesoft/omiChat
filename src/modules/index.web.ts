import localForage from "localforage";
import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";

import userInfoReducer from "./userInfo";
import registerInfoReducer from "./registerInfo";

// Declare userInfo's Persist Config to make reducer persist
const userInfoPersistConfig = {
    key: "userInfo",
    storage: localForage,
};

const rootReducer = combineReducers({
    userInfo: persistReducer(userInfoPersistConfig, userInfoReducer),
    registerInfo: registerInfoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
