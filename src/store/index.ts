import { Action, configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./rootEpic";
import rootMiddleware from "./rootMiddleware";
import rootReducer from "./rootReducer";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), epicMiddleware];
  },
});

// const store = useRootStore();

export default store;
epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface ActionBase extends Action<string> {
  type: string;
  payload?: any;
}
