import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { ActionBase } from "..";
import { AsyncActions } from "./action";
import { asyncDataEpic } from "./epic";

export interface AsyncDataState {
  count: number;
  data: any;
  error: any;
}

const initialState: AsyncDataState = {
  count: 0,
  data: null,
  error: null,
};

const asyncDataReducer = (
  state: AsyncDataState = initialState,
  action: ActionBase
) => {
  switch (action.type) {
    case AsyncActions.ADD_COUNT:
      console.log("add");
      return {
        ...state,
        count: state.count + (action.payload ? action.payload : 1),
      };
    case AsyncActions.FETCH_USER_SUCCESS:
      console.log("success");
      return {
        ...state,
        data: action.payload.response,
      };
    case AsyncActions.FETCH_USER_FAILURE:
      console.log("error");
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// const useAsyncData = (state: AsyncDataState) => {
//   const middleware = createEpicMiddleware();
//   const store = configureStore({
//     reducer: combineReducers({
//       asyncData: asyncDataReducer,
//     }),
//     middleware: (getDefaultMiddleware) => {
//       return [...getDefaultMiddleware(), middleware];
//     },
//   });
//   middleware.run(asyncDataEpic);
// };

export { asyncDataReducer };
