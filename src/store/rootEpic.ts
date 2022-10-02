import { combineEpics } from "redux-observable";
import { asyncDataEpic } from "./asyncData/epic";

const rootEpic = combineEpics(asyncDataEpic);

export default rootEpic;
