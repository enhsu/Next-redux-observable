import { mergeMap, Observable, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, catchError, tap } from "rxjs/operators";
import { combineEpics, Epic, ofType } from "redux-observable";
import { AsyncActions, fetchUserFailure, fetchUserSuccess } from "./action";

export const fetchUserEpic: Epic = (action$: Observable<any>, state$) => {
  return action$.pipe(
    ofType(AsyncActions.FETCH_USER),
    tap(() => {
      console.log("epic", state$);
    }),
    mergeMap((action) => {
      return ajax("https://jsonplaceholder.typicode.com/users").pipe(
        map((response) => {
          return fetchUserSuccess(response.response);
        }),
        catchError((err) => {
          return of(fetchUserFailure(err));
        })
      );
    })
  );
};

export const asyncDataEpic = combineEpics(fetchUserEpic);
