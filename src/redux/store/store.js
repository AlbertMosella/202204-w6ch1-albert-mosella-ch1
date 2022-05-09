import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "../feature/toDoSlice";

const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});

export default store;
