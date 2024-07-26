import authUserSlice from "./authUser";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  authUser: authUserSlice,
});

export default rootReducer;
